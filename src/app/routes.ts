import { Routes } from "@angular/router";

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/quiz-learner', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];
