import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl = 'http://localhost:8080/auth';

  authToken: string;
  user: any;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.authToken = localStorage.getItem('id_token');
  }

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    console.log('Sending post request to ' + url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, user, { headers: headers })
      .pipe(
        tap(data => console.log(data))
      );
  }

  loginUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    console.log('Sending post request to ' + url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, user, { headers: headers })
      .pipe(
        tap(data => console.log(data))
      );
  }

  storeUserData(token: string, user: any) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  isAuthenticated() {
    if (this.authToken === null) {
      return false;
    }

    return typeof this.authToken !== undefined;
  }

  getUser() {
    return this.user;
  }

  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
