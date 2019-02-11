import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISolvedQuestion } from 'src/app/shared/models/question.model';
import { QuizSolverService } from '../quiz-solver.service';
import { IAnswer } from '../solve-quiz.component';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  private readonly answerNumbersArr = Array.from('ABCDEFGHIJKLMNOPQRSTUVCXYZ');

  @Input() question: ISolvedQuestion;

  constructor() {
  }

  ngOnInit() {
    console.log('Question initialized!');
    console.log(this.question);
  }

  answerSelected(answer: IAnswer): void {
    if (answer.isSelected) {
      answer.isSelected = false;
    } else {
      answer.isSelected = true;
    }
  }

  getQuestionLetter(index: number): string {
    return this.answerNumbersArr[index];
  }
}
