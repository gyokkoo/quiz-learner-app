import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolbarItemsComponent } from './nav-toolbar-items.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

describe('NavToolbarItemsComponent', () => {
   let component: NavToolbarItemsComponent;
   let fixture: ComponentFixture<NavToolbarItemsComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            NavToolbarItemsComponent,
            RouterOutletStubComponent],
         imports: [
            RouterTestingModule,
            MatIconModule,
            BrowserAnimationsModule
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(NavToolbarItemsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
