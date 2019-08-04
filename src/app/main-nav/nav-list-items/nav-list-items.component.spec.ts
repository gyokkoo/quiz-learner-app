import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListItemsComponent } from './nav-list-items.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

describe('NavListItemsComponent', () => {
   let component: NavListItemsComponent;
   let fixture: ComponentFixture<NavListItemsComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            NavListItemsComponent,
            RouterOutletStubComponent
         ],
         imports: [
            RouterTestingModule,
            MatIconModule,
            BrowserAnimationsModule
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(NavListItemsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
