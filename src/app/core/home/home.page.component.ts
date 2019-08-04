import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../../environments/environment';
import { ServerResponse } from '../../shared/models/server-response.model';

interface AppInfo {
   quizzes: any[];
   totalQuizzes: number;
   totalSolvedQuizzes: number;
   totalQuestions: number;
   totalUsers: number;
}

@Component({
   templateUrl: './home.page.component.html'
})
export class HomePageComponent implements OnInit {
   private readonly baseUrl = environment.apiHost + 'quiz';
   public pageTitle = 'Welcome to Quiz Leaner!';

   totalQuizzesCount: number;
   totalQuestions: number;
   totalUsers: number;

   constructor(private http: HttpClient) {
   }

   ngOnInit(): void {
      this.fetchAppData();
   }

   private fetchAppData(): void {
      this.http.get(this.baseUrl + '/getMostRecent').subscribe((response: ServerResponse) => {
         if (response.data) {
            const data: AppInfo = response.data;
            this.totalQuizzesCount = data.totalQuizzes;
            this.totalQuestions = data.totalQuestions;
            this.totalUsers = data.totalUsers;
         }
      });
   }
}
