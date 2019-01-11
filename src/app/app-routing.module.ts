import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Error404Component } from './errors/404.component';
import { HomePageComponent } from './home/home.page.component';

export const APP_ROUTES: Routes = [
  {
    path: 'welcome',
    component: HomePageComponent
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
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

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
