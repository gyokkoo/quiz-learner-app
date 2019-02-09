import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateQuizComponent,
  QuizzesListComponent,
  QuizDetailsComponent,
  QuizEditComponent,
  EditInfoComponent,
  EditQuestionsComponent,
  QuestionsListComponent,
  QuestionsDetailsComponent,
  QuestionsAddComponent
} from './index';
import { quizzesRoutes } from './quizzes.routes';
import { SharedModule } from '../shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CreateQuizComponent,
    QuizzesListComponent,
    QuizDetailsComponent,
    QuizEditComponent,
    EditInfoComponent,
    EditQuestionsComponent,
    QuestionsListComponent,
    QuestionsDetailsComponent,
    QuestionsAddComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(quizzesRoutes)
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class QuizzesModule { }
