import { Component } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
   BrowserAnimationsModule,
   NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainNavComponent } from './main-nav.component';
import { NavListItemsComponent } from './nav-list-items/nav-list-items.component';
import { NavToolbarItemsComponent } from './nav-toolbar-items/nav-toolbar-items.component';
import { ToastrModule } from 'ngx-toastr';

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

describe('MainNavComponent', () => {
   let component: MainNavComponent;
   let fixture: ComponentFixture<MainNavComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            MainNavComponent,
            NavListItemsComponent,
            NavToolbarItemsComponent,
            RouterOutletStubComponent
         ],
         imports: [
            BrowserAnimationsModule,
            NoopAnimationsModule,
            LayoutModule,
            MatButtonModule,
            MatIconModule,
            MatListModule,
            MatSidenavModule,
            MatToolbarModule,
            HttpClientModule,
            RouterTestingModule,
            ToastrModule.forRoot()
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(MainNavComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should compile', () => {
      expect(component).toBeTruthy();
   });
});
