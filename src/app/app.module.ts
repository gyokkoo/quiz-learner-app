import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { Error404Component } from './errors/404.component';
import { ErrorsHandler } from './errors/errors-handler';
import { RouterModule } from '@angular/router';

import {
  HomePageComponent,
  AboutPageComponent
} from './core/index';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    // NgbModule.forRoot(),
    ToastrModule.forRoot({
      // timeOut: 500,
      // positionClass: 'toast-top-right',
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
