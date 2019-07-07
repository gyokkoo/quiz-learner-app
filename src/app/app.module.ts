import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { ErrorsHandler } from './errors/errors-handler';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
   HomePageComponent,
   AboutPageComponent
} from './core';

import { appRoutes } from './routes';
import { QuizzesModule } from './quizzes/quizzes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { CustomMaterialModule } from './core/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
   declarations: [
      AppComponent,
      Error404Component,
      HomePageComponent,
      AboutPageComponent,
      MainNavComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      // NoopAnimationsModule, // <-- Disable animations
      CustomMaterialModule,
      FlexLayoutModule,
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
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
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
