import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Answer } from '../../../shared/models/question.model';

@Component({
  selector: 'app-answers-list',
  templateUrl: 'answers-list.component.html',
  styleUrls: ['answers-list.component.scss'],
})
export class AnswersListComponent implements OnInit {
  private readonly answerViewColor: ThemePalette = 'primary';

  @Input() shouldFreeze: boolean;

  @Input() availableAnswers: Array<Answer>;

  @Output() answerChange: EventEmitter<Answer> = new EventEmitter<Answer>();

  selectedAnswer: Answer;

  constructor() {}

  ngOnInit(): void {}

  onAnswerClick(answer: Answer): void {
    if (this.shouldFreeze) {
      return;
    }

    this.selectedAnswer = answer;
    this.answerChange.emit(answer);
  }
}
