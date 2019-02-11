import { Routes } from '@angular/router';

import {
    CreateQuizComponent,
    QuizzesListComponent,
    QuizDetailsComponent,
    EditInfoComponent,
    EditQuestionsComponent,
    QuestionsAddComponent,
    QuizEditComponent,
    SolveQuizComponent,
    QuestionComponent
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
        path: 'quizzes/solve/:id',
        component: SolveQuizComponent,
        // children: [{
        //     path: '/question/:id',
        //     component: QuestionComponent,
        // }]
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
