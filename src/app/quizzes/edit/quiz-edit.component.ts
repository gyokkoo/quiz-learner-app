import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { slideInAnimation } from '../../shared/app.animation';

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss'],
  animations: [slideInAnimation],
})
export class QuizEditComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  backClicked(): void {
    this.location.back();
  }

  save(): void {
    window.alert('Save is not implemented');
  }

  deleteQuiz(): void {
    window.alert('Delete is not implemented');
  }
}
