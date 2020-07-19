import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/user/auth.service';
import { Question } from 'src/app/shared/models/question.model';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { ToastrService } from 'ngx-toastr';
import { QuizzesService } from '../quizzes.service';

@Injectable({
  providedIn: 'root',
})
export class QuizBuilderService {
  private readonly baseUrl = environment.apiHost + 'quiz';

  questions: Question[];
  currentQuestion: Question;
  index = 0;

  quizId: string;

  constructor(
    private toastr: ToastrService,
    private quizzesService: QuizzesService,
    private authService: AuthService
  ) {
    this.questions = [];
  }

  getSelectedQuestion(): Question {
    return this.currentQuestion;
  }

  loadQuestions(quizId: string): void {
    this.questions = [];
    this.quizzesService.getAllQuestionsByQuizId(quizId).subscribe(
      (res) => this.handleQuestionsFetched(res),
      (error) => console.log(error)
    );
  }

  createQuestion(question: Question): void {
    this.questions.push(question);
    this.quizzesService.createQuestion(question).subscribe(
      (res) => this.handleQuestionAdded(res),
      (error) => console.log(error)
    );
  }

  private handleQuestionsFetched(res: any) {
    if (res.success) {
      const questionsData = res.allQuestions;
      if (!questionsData?.length) {
        return;
      }

      for (let i = 0; i < questionsData.length; i++) {
        this.questions.push(questionsData[i]);
      }
      if (questionsData.length > 0) {
        this.currentQuestion = this.questions[0];
      }
      console.log(this.questions);
      this.toastr.success(res.message);
    } else {
      this.toastr.error('Could not load quiz questions! Check for errors');
    }
  }

  private handleQuestionAdded(res: ServerResponse) {
    if (res.success) {
      console.log(res.data);
      this.toastr.success(res.message);
      this.questions.push(res.data);
    }
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
}
