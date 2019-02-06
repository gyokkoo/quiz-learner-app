import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreateQuizComponent } from './create-quiz.component';
import { quizzesRoutes } from './quizzes.routes';

@NgModule({
  declarations: [
    CreateQuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(quizzesRoutes)
  ]
})
export class QuizzesModule { }
