import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateQuizComponent,
  QuizzesListComponent
} from './index';
import { quizzesRoutes } from './quizzes.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateQuizComponent,
    QuizzesListComponent
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
