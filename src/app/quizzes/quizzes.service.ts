import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../user/auth.service';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

import { IQuiz } from '../shared/models/quiz.model';
import { ServerResponse } from '../shared/models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  private readonly baseUrl = environment.apiHost + 'quiz';

  quizzes: IQuiz[];

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  createQuiz(quiz: any): Observable<any> {
    quiz.userId = this.authService.user.id;
    const url = `${this.baseUrl}/create`;
    const headers = this.getRequestHeaders(true);

    return this.http.post(url, quiz, { headers })
      .pipe(
        tap(data => console.log(data))
      );
  }

  getQuizById(id: string): Observable<ServerResponse> {
    const url =  `${this.baseUrl}/getQuizById/${id}`;
    console.log(id);

    const headers = this.getRequestHeaders(false);

    return this.http.get(url, { headers })
      .pipe(
        tap((data: ServerResponse) => console.log(data))
      );
  }

  getAllQuizzes(): Observable<ServerResponse> {
    const url = `${this.baseUrl}/getAllQuizzes`;
    const headers = this.getRequestHeaders(false);

    return this.http.get(url, { headers })
      .pipe(
        tap((data: ServerResponse) => console.log(data))
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
