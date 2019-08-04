import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesListComponent } from './quizzes-list.component';
import { StarComponent } from '../../shared/star.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

describe('QuizzesListComponent', () => {
   let component: QuizzesListComponent;
   let fixture: ComponentFixture<QuizzesListComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            QuizzesListComponent,
            StarComponent,
            RouterOutletStubComponent
         ],
         imports: [
            RouterTestingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            ToastrModule.forRoot()
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(QuizzesListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
