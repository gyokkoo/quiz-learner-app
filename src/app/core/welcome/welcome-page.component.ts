import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ServerResponse } from '../../shared/models/server-response.model';
import { AuthService } from '../../user/auth.service';

export interface AppInfo {
  quizzes: any[];
  totalQuizzes: number;
  totalSolvedQuizzes: number;
  totalQuestions: number;
  totalUsers: number;
}

@Component({
  templateUrl: 'welcome-page.component.html',
  styleUrls: ['welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  private readonly baseUrl = environment.apiHost + 'quiz';

  get pageTitle(): string {
    if (this.authService.isAuthenticated()) {
      return `Welcome ${this.authService.getUser().name}`;
    }

    return 'Welcome';
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  appInfo: AppInfo;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchAppData();
  }

  private fetchAppData(): void {
    this.http
      .get(this.baseUrl + '/getMostRecent')
      .subscribe((response: ServerResponse) => {
        if (response.data) {
          this.appInfo = response.data;
        }
      });
  }
}
