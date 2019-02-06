import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';
import { HomePageComponent } from './home/home.page.component';

export const appRoutes: Routes = [
  {
    path: 'welcome',
    component: HomePageComponent
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
