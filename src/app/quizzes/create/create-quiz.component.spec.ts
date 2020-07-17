import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';

import { NotificationService } from 'src/app/core/services/notification.service';
import { QuizzesService } from '../quizzes.service';
import { CreateQuizComponent } from './create-quiz.component';

describe('CreateQuizComponent', () => {
  let component: CreateQuizComponent;
  let fixture: ComponentFixture<CreateQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
      declarations: [CreateQuizComponent],
      providers: [
        FormBuilder,
        NotificationService,
        {
          provide: QuizzesService,
          useValue: { createQuiz: () => of({}) },
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('#createQuiz', () => {
    it('should call quizzesService when form is valid', () => {
      const quizService: QuizzesService = TestBed.inject(QuizzesService);
      spyOn(quizService, 'createQuiz').and.returnValue(
        of({ success: 'true', quiz: { id: 'mock-id' } })
      );

      const mockTitle = 'Valid title!';
      const mockDescription = 'Valid description!';

      component.formGroup.get('title').setValue(mockTitle);
      component.formGroup.get('description').setValue(mockDescription);

      component.createQuiz();

      expect(quizService.createQuiz).toHaveBeenCalledTimes(1);
      expect(quizService.createQuiz).toHaveBeenCalledWith({
        title: mockTitle,
        description: mockDescription,
      });
    });
  });
});
