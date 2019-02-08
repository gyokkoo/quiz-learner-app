import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { QuizzesService } from '../quizzes.service';
import { IQuiz } from 'src/app/shared/models/quiz.model';

@Component({
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit, OnDestroy {

  quiz: IQuiz;

  private id: string;
  private sub: any;

  constructor(private quizzesService: QuizzesService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
    this.quiz = this.getInitialQuizValues();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    if (this.id) {
      this.quizzesService.getQuizById(this.id).subscribe(
        (data => this.handleQuizDetailsFetching(data))
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private handleQuizDetailsFetching(data): void {
    if (data.success) {
      // TODO: map properly the data
      const quizData = data.quiz;
      this.quiz.id = quizData._id;
      this.quiz.name = quizData.name;
      this.quiz.description = quizData.description;
      this.quiz.dateCreated = new Date(quizData.dateCreated);
      this.quiz.questionsCount = quizData.questions.length;
      this.quiz.creator = data.creator;

      console.log(this.quiz);

      this.toastr.success(data.message);
    } else {
      this.toastr.error(data.message);
    }
  }

  private getInitialQuizValues(): IQuiz {
    // Return an initialized object
    return {
      id: this.id,
      name: null,
      creator: null,
      description: null,
      dateCreated: null,
      rating: null,
      questionsCount: 0
   };
  }
}
