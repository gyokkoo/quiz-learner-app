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
  QuestionsAddComponent,
  SolveQuizComponent,
  QuizResultComponent,
  QuestionComponent,
  EditQuestionComponent
} from '.';
import { quizzesRoutes } from './quizzes.routes';
import { SharedModule } from '../shared/shared.module';

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
    QuestionsAddComponent,
    SolveQuizComponent,
    QuizResultComponent,
    QuestionComponent,
    EditQuestionComponent
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
