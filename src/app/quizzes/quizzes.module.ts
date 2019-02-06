import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateQuizComponent,
  AllQuizzesComponent
} from './index';
import { quizzesRoutes } from './quizzes.routes';

@NgModule({
  declarations: [
    CreateQuizComponent,
    AllQuizzesComponent
  ],
  imports: [
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
