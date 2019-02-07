import { Routes } from '@angular/router';

import {
    CreateQuizComponent,
    QuizzesListComponent
} from './index';

export const quizzesRoutes: Routes = [
    {
        path: 'create',
        component: CreateQuizComponent
    },
    {
        path: 'all',
        component: QuizzesListComponent
    }
];
