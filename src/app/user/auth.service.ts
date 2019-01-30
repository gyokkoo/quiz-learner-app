import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators'
import { User } from "./user";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    registerUser(user: any): Observable<any> {
        const url = 'http://localhost:8080/auth/register';
        console.log('Sending post request to ' + url);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post(url, user, { headers: headers })
            .pipe(
                tap(data => console.log('Server response: ' + JSON.stringify(data)))
            );;
    }
}