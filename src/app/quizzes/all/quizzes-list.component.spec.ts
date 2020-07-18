import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';

import { QuizzesListComponent } from './quizzes-list.component';
import { QuizzesService } from '../quizzes.service';

describe('QuizzesListComponent', () => {
  let component: QuizzesListComponent;
  let fixture: ComponentFixture<QuizzesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [QuizzesListComponent],
      providers: [
        {
          provide: QuizzesService,
          useValue: { getAllQuizzes: () => of([]) },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesListComponent);
    component = fixture.componentInstance;
  });

  it('should create properly', () => {
    expect(component).toBeTruthy();
  });

  it('should request quizzes on init', () => {
    const quizzesService: QuizzesService = TestBed.inject(QuizzesService);
    spyOn(quizzesService, 'getAllQuizzes').and.returnValue(of([]));

    expect(component.quizzes$).toBeUndefined();
    component.ngOnInit();

    expect(quizzesService.getAllQuizzes).toHaveBeenCalledTimes(1);
    expect(component.quizzes$).toBeDefined();
  });
});
