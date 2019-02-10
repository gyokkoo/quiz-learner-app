import { Component, OnInit, ViewChildren, ContentChildren } from '@angular/core';
import { Router } from '@angular/router';
import { QuizSolverService } from './quiz-solver.service';
import { QuizzesService } from '../quizzes.service';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { ToastrService } from 'ngx-toastr';
import { IQuiz } from 'src/app/shared/models/quiz.model';
import { IQuestion } from 'src/app/shared/models/question.model';


export interface IAnswer {
  answer: string;
  isCorrect: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-solve-quiz',
  templateUrl: './solve-quiz.component.html',
  styleUrls: ['./solve-quiz.component.scss']
})
export class SolveQuizComponent implements OnInit {

  quizId: string;

  get question(): IQuestion | null {
    if (this.quizSolver.questions) {
      return this.quizSolver.questions[this.quizSolver.index];
    }

    return null;
  }

  get isLastQuestion(): boolean {
    return this.quizSolver.isLastQuestion;
  }

  constructor(private router: Router,
              private quizSolver: QuizSolverService,
              private quizzesService: QuizzesService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.quizId = this.router.url.split('/')[3];

    // If the cached quiz id is not loaded
    if (!this.quizSolver.questions || 
         this.quizSolver.questions[0].quizId !== this.quizId) {
      console.log('Questions are not loaded, loading them');
      this.quizzesService.getAllQuestionsByQuizId(this.quizId)
        .subscribe((res: ServerResponse) => this.handleQuestionsFetched(res));
    }

    this.quizSolver.index = 0;
  }

  answerSelected(answer: IAnswer): void {
    answer.isSelected = true;
    console.log(answer);
  }

  nextQuestionClicked() {
    if (this.quizSolver.index < this.quizSolver.questions.length - 1) {
      this.quizSolver.index++;
    } else {
      this.quizSolver.isLastQuestion = true;
    }
    
  }

  handleQuestionsFetched(res: ServerResponse): void {
    if (res.success) {

      this.quizSolver.questions = res.data;
      this.toastr.success(res.message);
      console.log(this.quizSolver.index);
      console.log(this.quizSolver.questions);
      console.log(this.question);
    }
  }
}
