import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './errors/404.component';
import { ErrorsHandler } from './errors/errors-handler';
import { RouterModule } from '@angular/router';

import {
   HomePageComponent,
   AboutPageComponent
} from './core';

import { appRoutes } from './routes';
import { QuizzesModule } from './quizzes/quizzes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
      // NoopAnimationsModule, // <-- Disable animations
      MatButtonModule,
      MatCheckboxModule,
      NgbModule,
      QuizzesModule,
      ToastrModule.forRoot({
         positionClass: 'toast-top-right',
         preventDuplicates: false,
      }),
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ServiceWorkerModule.register('ngsw-worker.js', {
         enabled: environment.production
      }),
   ],
   providers: [
      {
         provide: ErrorHandler,
         useClass: ErrorsHandler
      }
   ],
   entryComponents: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
