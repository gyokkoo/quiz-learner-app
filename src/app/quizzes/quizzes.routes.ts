import { Routes } from '@angular/router';
import { CreateQuizComponent } from './create-quiz.component';

export const quizzesRoutes: Routes = [
    {
        path: 'create',
        component: CreateQuizComponent
    }
];
