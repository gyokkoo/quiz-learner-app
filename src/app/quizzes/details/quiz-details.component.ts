import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../quizzes.service';

@Component({
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {

  constructor(quizzesService: QuizzesService) { }

  ngOnInit() {
    console.log('quiz details work!');
  }
}
