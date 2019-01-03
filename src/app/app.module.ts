import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { Error404Component} from './errors/404.component';

import { appRoutes } from './routes';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
