import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';

import {
  WelcomePageComponent,
  AboutPageComponent
} from './core';

export const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'quizzes',
    loadChildren: './quizzes/quizzes.module#QuizzesModule'
  },
  {
    path: '', redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  }
];
