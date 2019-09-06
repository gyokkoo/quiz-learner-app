import {
   Component, EventEmitter,
   Input,
   OnInit, Output
} from '@angular/core';
import { ThemePalette } from '@angular/material';
import { Answer } from '../../../shared/models/question.model';

@Component({
   selector: 'app-answers-list',
   templateUrl: './answers-list.component.html',
   styleUrls: ['./answers-list.component.scss'],
})
export class AnswersListComponent implements OnInit {

   private readonly answerViewColor: ThemePalette = 'primary';

   @Input() availableAnswers: Array<Answer>;

   @Output() answerChange: EventEmitter<Answer> = new EventEmitter<Answer>();

   selectedAnswer: Answer;

   constructor() {
   }

   ngOnInit(): void {
   }

   onAnswerClick(answer: Answer): void {
      this.selectedAnswer = answer;
      this.answerChange.emit(answer);
   }

}
