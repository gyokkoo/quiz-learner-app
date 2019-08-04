import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppInfoComponent } from './app-info/app-info.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

describe('WelcomePageComponent', () => {
   let component: WelcomePageComponent;
   let fixture: ComponentFixture<WelcomePageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            WelcomePageComponent,
            AppInfoComponent,
            RouterOutletStubComponent
         ],
         imports: [
            RouterTestingModule,
            MatCardModule,
            HttpClientModule
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(WelcomePageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
