import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizBuilderService } from '../quiz-builder.service';
import { Router } from '@angular/router';
import { QuizzesService } from '../../quizzes.service';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
})
export class QuestionsListComponent implements OnInit {
  quizId: string;

  get questions(): Question[] {
    return this.quizBuilder.questions;
  }

  get selectedQuestion(): Question {
    return this.quizBuilder.currentQuestion;
  }

  constructor(
    private quizBuilder: QuizBuilderService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.quizId = this.router.url.split('/')[3];
    console.log(this.quizId);
    this.quizBuilder.loadQuestions(this.quizId);
  }

  onSelected(question: Question): void {
    this.quizBuilder.currentQuestion = question;
  }
}
