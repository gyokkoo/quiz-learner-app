import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizComponent } from './create-quiz.component';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { QuizzesService } from '../quizzes.service';
import { of } from 'rxjs';

describe('CreateQuizComponent', () => {
  let component: CreateQuizComponent;
  let fixture: ComponentFixture<CreateQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), RouterModule.forRoot([])],
      declarations: [CreateQuizComponent],
      providers: [
        FormBuilder,
        NotificationService,
        {
          provide: QuizzesService,
          useValue: { createQuiz: () => of({}) },
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
});
