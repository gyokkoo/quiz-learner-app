import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';

import { WelcomePageComponent, AboutPageComponent } from './core';

export const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'quizzes',
    loadChildren: () =>
      import('./quizzes/quizzes.module').then((m) => m.QuizzesModule),
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404Component,
  },
];
