import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizzesService, QuizDetails } from '../quizzes.service';
import { filter } from 'rxjs/operators';

const minQuizTitleLength = 5;
const maxQuizTitleLength = 100;
const maxQuizDescriptionLength = 500;

@Component({
  selector: 'app-create-quiz',
  templateUrl: 'create-quiz.component.html',
  styleUrls: ['../quiz-form.style.scss'],
})
export class CreateQuizComponent implements OnInit {
  formGroup: FormGroup;

  get isTitleValid(): boolean {
    return (
      !this.formGroup.controls['title'].valid &&
      this.formGroup.controls['title'].touched
    );
  }

  get isDescriptionValid(): boolean {
    return (
      !this.formGroup.controls['description'].valid &&
      this.formGroup.controls['description'].touched
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private quizzesService: QuizzesService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(minQuizTitleLength),
          Validators.maxLength(maxQuizTitleLength),
        ],
      ],
      description: [
        '',
        [Validators.required, Validators.maxLength(maxQuizDescriptionLength)],
      ],
    });
  }

  createQuiz(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const quiz: QuizDetails = this.formGroup.value;
    this.quizzesService
      .createQuiz(quiz)
      .pipe(filter((quizId) => quizId !== null))
      .subscribe((quizId: string) => {
        // Redirect to add questions page.
        this.router.navigate(['/quizzes/edit/' + quizId + '/add']);
      });
  }
}
