import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './errors/404.component';
import { HomePageComponent } from './home/home.page.component';
import { ErrorsHandler } from './errors/errors-handler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 500,
      // positionClass: 'toast-top-right',
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    HttpClientModule,
    AppRoutingModule,
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
