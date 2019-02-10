import { Injectable, OnInit } from '@angular/core';
import { IQuiz } from 'src/app/shared/models/quiz.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { AuthService } from 'src/app/user/auth.service';
import { IQuestion } from 'src/app/shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizSolverService {
  questions: Array<IQuestion>;
  index: number;
  isLastQuestion: boolean
  
  constructor() { }

}
