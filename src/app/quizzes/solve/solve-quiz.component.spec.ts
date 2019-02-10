import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveQuizComponent } from './solve-quiz.component';

describe('SolveQuizComponent', () => {
  let component: SolveQuizComponent;
  let fixture: ComponentFixture<SolveQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolveQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
