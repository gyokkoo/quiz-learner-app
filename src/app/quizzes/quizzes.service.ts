import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../user/auth.service';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

import { QuizModel } from '../shared/models/quiz.model';
import { ServerResponse } from '../shared/models/server-response.model';
import { ISolvedQuestion, IQuestion } from '../shared/models/question.model';
import { NotificationService } from '../core/services/notification.service';

export interface CreateQuizData {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  private readonly baseUrl = environment.apiHost + 'quiz';

  solvedQuestions: Array<ISolvedQuestion>;
  quizzes: QuizModel[];
  currentQuiz: QuizModel;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  /**
   * Create a quiz object in the system.
   * Requires userId and creator to be set.
   * @param quiz Quiz to create object data
   */
  createQuiz(quiz: CreateQuizData): Observable<any> {
    const userId = this.authService?.user?.id;
    const creator = this.authService?.user?.name;
    const quizData = {
      title: quiz.title,
      description: quiz.description,
      userId: userId,
      creator: creator,
    };

    const url = `${this.baseUrl}/create`;
    const headers = this.getRequestHeaders(true);

    return this.http
      .post(url, quizData, { headers })
      .pipe(tap((data) => console.log(data)));
  }

  getQuizById(id: string): Observable<ServerResponse> {
    const url = `${this.baseUrl}/getQuizById/${id}`;

    const headers = this.getRequestHeaders(false);

    return this.http
      .get(url, { headers })
      .pipe(tap((data: ServerResponse) => console.log(data)));
  }

  /**
   * Fetch all quizzes in the sysmtem and show success message.
   * Return empty array in case of an error.
   */
  getAllQuizzes(): Observable<QuizModel[]> {
    const url = `${this.baseUrl}/getAll`;
    const headers = this.getRequestHeaders(false);

    return this.httpGetInternal(url, headers).pipe(
      map((response: ServerResponse) => {
        if (response.success && response.message) {
          this.notificationService.success(response.message);
        }

        return response.data;
      }),
      catchError((err) => {
        console.error(err);
        const errorMessage = err?.error?.message;
        if (errorMessage) {
          this.notificationService.error(errorMessage);
        }

        return of([]);
      })
    );
  }

  getAllQuestionsByQuizId(id: string): Observable<ServerResponse> {
    const url = `${this.baseUrl}/getQuizById/${id}`;
    const headers = this.getRequestHeaders(false);

    return this.http
      .get<ServerResponse>(url, { headers })
      .pipe(tap((res: ServerResponse) => console.log(res)));
  }

  getQuestionById(id: string): Observable<ServerResponse> {
    const url = `${this.baseUrl}/getQuestionById/${id}`;
    const headers = this.getRequestHeaders(true);

    return this.http.get<ServerResponse>(url, { headers });
  }

  deleteQuizById(quizId: string): Observable<ServerResponse> {
    const url = `${this.baseUrl}/deleteQuiz/${quizId}`;
    const headers = this.getRequestHeaders(true);

    return this.http
      .delete(url, { headers })
      .pipe(tap((res: ServerResponse) => console.log(res)));
  }

  createQuestion(question: IQuestion): Observable<ServerResponse> {
    const url = `${this.baseUrl}/createQuestion`;
    const headers = this.getRequestHeaders(true);

    return this.http
      .post<ServerResponse>(url, question, { headers })
      .pipe(tap((data) => console.log(data)));
  }

  private getRequestHeaders(shouldAuthorize: boolean): HttpHeaders {
    if (shouldAuthorize) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.authService.authToken,
      });
    }

    // Without auth token
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  private httpGetInternal(
    url: string,
    headers: HttpHeaders
  ): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(url, { headers });
  }
}
