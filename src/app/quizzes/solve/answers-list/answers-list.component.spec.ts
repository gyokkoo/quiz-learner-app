import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersListComponent } from './answers-list.component';
import { MatButtonModule, MatChipsModule } from '@angular/material';

describe('AnswersListComponent', () => {
   let component: AnswersListComponent;
   let fixture: ComponentFixture<AnswersListComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [AnswersListComponent],
         imports: [
            MatButtonModule,
            MatChipsModule
         ]
      })
            .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AnswersListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
