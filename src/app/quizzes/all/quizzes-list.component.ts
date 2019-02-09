import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../quizzes.service';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { ToastrService } from 'ngx-toastr';
import { IQuiz } from 'src/app/shared/models/quiz.model';

@Component({
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.scss']
})
export class QuizzesListComponent implements OnInit {

  quizzes: IQuiz[];

  listFilter = '';

  constructor(private quizzesSerivce: QuizzesService,
              private toastr: ToastrService) {
    this.quizzes = [];
  }

  ngOnInit() {
    this.quizzesSerivce.getAllQuizzes()
      .subscribe((res: ServerResponse ) => {
        this.handleQuizzesFetch(res);
      });
  }

  private handleQuizzesFetch(res: ServerResponse): void {
    if (res.success) {
      for (let i = 0; i < res.data.length; i++) {
        this.quizzes.push(res.data[i]);
      }
      console.log(this.quizzes);
      this.toastr.success(res.message);
    }
  }
}
