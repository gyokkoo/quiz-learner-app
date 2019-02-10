import { TestBed } from '@angular/core/testing';

import { QuizSolverService } from './quiz-solver.service';

describe('QuizSolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizSolverService = TestBed.get(QuizSolverService);
    expect(service).toBeTruthy();
  });
});
