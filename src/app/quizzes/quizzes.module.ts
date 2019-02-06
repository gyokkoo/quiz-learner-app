import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild(quizzesRoutes)
  ]
})
export class QuizzesModule { }
