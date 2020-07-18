import {
   Component,
   OnInit,
   OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { QuizSolverService } from './quiz-solver.service';
import { QuizzesService } from '../quizzes.service';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { ToastrService } from 'ngx-toastr';
import {
   Answer,
   IQuestion,
   ISolvedQuestion
} from 'src/app/shared/models/question.model';

@Component({
   selector: 'app-solve-quiz',
   templateUrl: './solve-quiz.component.html',
   styleUrls: ['./solve-quiz.component.scss']
})
export class SolveQuizComponent implements OnInit, OnDestroy {
   quizId: string;

   isAnswerCorrect: boolean | null;
   checkClicked: boolean;

   correctAnswer: string | null;

   selectedAnswer: Answer;

   get question(): IQuestion | null {
      if (this.quizSolver.questions) {
         return this.quizSolver.questions[this.quizSolver.index];
      }

      return null;
   }

   get isFirstQuestion(): boolean {
      return this.quizSolver.isFirstQuestion;
   }

   get isLastQuestion(): boolean {
      return this.quizSolver.isLastQuestion;
   }

   get solvedQuestions(): Array<ISolvedQuestion> {
      return this.quizSolver.questions;
   }

   get isAnswerSelected(): boolean {
      return this.selectedAnswer !== undefined;
   }

   isQuizFinished: boolean;

   constructor(private router: Router,
         private quizSolver: QuizSolverService,
         private quizzesService: QuizzesService,
         private toastr: ToastrService) {
   }

   ngOnInit() {
      this.quizId = this.router.url.split('/')[3];

      if (!this.quizSolver.questions ||
            this.quizSolver.questions[0].quizId !== this.quizId) {
         console.log('Questions are not loaded, loading them');
         this.quizzesService.getAllQuestionsByQuizId(this.quizId)
               .subscribe((res: ServerResponse) => this.handleQuestionsFetched(res));
      }

      this.quizSolver.isFirstQuestion = true;
      this.quizSolver.index = 0;
   }

   ngOnDestroy(): void {
      this.quizSolver.clearCache();
   }

   onAnswerChange(answer: Answer): void {
      this.selectedAnswer = answer;
   }

   handleQuestionsFetched(res: any): void {
      if (res.success) {
         this.quizSolver.questions = res.allQuestions;
         this.toastr.success(res.message);
      }
   }

   onCheckClick(): void {
      this.isAnswerCorrect = this.selectedAnswer.isCorrect;
      if (!this.isAnswerCorrect) {
         this.correctAnswer = this.getCorrectAnswer();
      }

      this.checkClicked = true;
   }

   onContinueClick(): void {
      this.isAnswerCorrect = null;
      this.checkClicked = false;

      if (!this.isLastQuestion) {
         this.quizSolver.index++;
      }

   }

   onFinished(): void {
      this.isQuizFinished = true;
      this.quizSolver.checkQuiz();
   }

   private getCorrectAnswer(): string {
      return this.question.answers.filter((answer: Answer) => answer.isCorrect)[0]?.answer;
   }
}
