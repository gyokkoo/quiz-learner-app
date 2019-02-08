import { Routes } from '@angular/router';

import {
    CreateQuizComponent,
    QuizzesListComponent,
    QuizDetailsComponent
} from './index';

export const quizzesRoutes: Routes = [
    {
        path: 'create',
        component: CreateQuizComponent
    },
    {
        path: 'details/:id',
        component: QuizDetailsComponent,
    },
    {
        path: 'all',
        component: QuizzesListComponent
    }
];
