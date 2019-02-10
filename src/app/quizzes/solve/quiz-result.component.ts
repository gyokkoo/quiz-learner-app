import { Component, OnInit, Input } from '@angular/core';
import { ISolvedQuestion } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  @Input() solvedQuiz: Array<ISolvedQuestion>

  constructor() { }

  ngOnInit() {
    console.log(this.solvedQuiz);
  }

  reportMistakes() {
    window.alert('Not implemented yet!');
  }
}
