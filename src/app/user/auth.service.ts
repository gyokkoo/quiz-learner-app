import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'

@Injectable({   
    providedIn: 'root'
})
export class AuthService {
    private readonly registerRoute = 'localhost:8080/auth/register';

    constructor(private http: HttpClient) {
    }

    registerUser(user: any) {
        console.log ('Sending post request to ' + this.registerRoute);

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post(this.registerRoute, user, {headers: headers})
            .pipe(
                tap(data => console.log('Server response: ' + JSON.stringify(data))));
    }
}