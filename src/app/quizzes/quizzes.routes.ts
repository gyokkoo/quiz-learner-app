import { Routes } from '@angular/router';

import {
    CreateQuizComponent,
    AllQuizzesComponent
} from './index';

export const quizzesRoutes: Routes = [
    {
        path: 'create',
        component: CreateQuizComponent
    },
    {
        path: 'all',
        component: AllQuizzesComponent
    }
];
