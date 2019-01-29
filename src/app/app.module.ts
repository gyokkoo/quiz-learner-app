import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './errors/404.component';
import { HomePageComponent } from './home/home.page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
