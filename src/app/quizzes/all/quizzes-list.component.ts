import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuizzesService } from '../quizzes.service';
import { QuizModel } from 'src/app/shared/models/quiz.model';

@Component({
  templateUrl: 'quizzes-list.component.html',
  styleUrls: ['quizzes-list.component.scss'],
})
export class QuizzesListComponent implements OnInit {
  quizzes$: Observable<QuizModel[]>;

  listFilter = '';

  constructor(private quizzesSerivce: QuizzesService) {}

  ngOnInit() {
    this.quizzes$ = this.quizzesSerivce.getAllQuizzes();
  }
}
