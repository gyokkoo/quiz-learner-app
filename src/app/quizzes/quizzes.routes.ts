import { Routes } from '@angular/router';

import {
    CreateQuizComponent,
    QuizzesListComponent,
    QuizDetailsComponent,
    EditInfoComponent,
    EditQuestionsComponent,
    QuestionsAddComponent,
    QuizEditComponent
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
        path: 'edit/:id',
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
                path: 'add',
                component: QuestionsAddComponent
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
