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

  currentQuestion: IQuestion;

  index = 0;

  quizId: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.questions = [];
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
