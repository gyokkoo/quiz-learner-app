import { Routes } from '@angular/router';

import {
    CreateQuizComponent,
    QuizzesListComponent,
    QuizDetailsComponent,
    EditInfoComponent,
    EditQuestionsComponent
} from './index';
import { QuizEditComponent } from './edit/quiz-edit.component';

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
        path: ':id/edit',
        component: QuizEditComponent,
        children: [
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
            },
            {
                path: 'info',
                component: EditInfoComponent
            },
            {
                path: 'questions',
                component: EditQuestionsComponent
            }
        ]
    },
    {
        path: 'all',
        component: QuizzesListComponent
    }
];
