import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/user/auth.service';
import { IQuestion } from 'src/app/shared/models/question.model';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizBuilderService {

  private readonly baseUrl = environment.apiHost + 'quiz';
  questions: IQuestion[];

  questionsMock = [
    {
      quizId: '999999',
      id: '6534',
      question: 'What is asd?',
      answers: [
        { answer: '1', isCorrect: true },
        { answer: '2', isCorrect: true },
        { answer: '3', isCorrect: false },
      ],
      shouldShuffle: false,
    },
    {
      quizId: '999999',
      id: '123',
      question: 'What is das?',
      answers: [
        { answer: '4', isCorrect: true },
        { answer: '5', isCorrect: true },
        { answer: '6', isCorrect: false },
      ],
      shouldShuffle: false,
    },
    {
      quizId: '999999',
      id: '455',
      question: 'What is 123?',
      answers: [
        { answer: '7', isCorrect: true },
        { answer: '233', isCorrect: true },
        { answer: '6767', isCorrect: false },
      ],
      shouldShuffle: false,
    }];

  currentQuestion: IQuestion;

  index = 0;
  questionIndex: number;
  quizId: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.questions = [];
    this.currentQuestion = this.questionsMock[0];
  }

  getSelectedQuestion(): IQuestion {
    return this.currentQuestion;
  }

  createQuestion(question: IQuestion): Observable<ServerResponse> {
    const url = `${this.baseUrl}/createQuestion`;
    const headers = this.getRequestHeaders(true);

    this.questions.push(question);

    return this.http.post<ServerResponse>(url, question, { headers })
      .pipe(
        tap(data => console.log(data))
      );
  }

  private getRequestHeaders(shouldAuthorize: boolean): HttpHeaders {
    if (shouldAuthorize) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ('bearer ' + this.authService.authToken)
      });
    }

    // Without auth token
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
}
