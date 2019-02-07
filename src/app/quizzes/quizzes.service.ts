import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  private readonly baseUrl = environment.apiHost + 'quiz';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  createQuiz(quiz: any): Observable<any> {
    quiz.userId = this.authService.user.id;
    console.log(quiz);

    const url = `${this.baseUrl}/create`;
    console.log('Sending post request to ' + url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ('bearer ' + this.authService.authToken)
    });

    return this.http.post(url, quiz, { headers: headers })
      .pipe(
        tap(data => console.log(data))
      );
  }
}
