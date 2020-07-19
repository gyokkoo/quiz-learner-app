import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizzesService, CreateQuizData } from '../quizzes.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { filter } from 'rxjs/operators';
import { QuizDetailsComponent } from '../details/quiz-details.component';

const minQuizTitleLength = 5;
const maxQuizTitleLength = 100;
const maxQuizDescriptionLength = 500;

@Component({
  selector: 'app-create-quiz',
  templateUrl: 'create-quiz.component.html',
  styleUrls: ['create-quiz.component.scss'],
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
    private notificationService: NotificationService,
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

    const quiz: CreateQuizData = this.formGroup.value;
    this.quizzesService
      .createQuiz(quiz)
      .pipe(filter((quizId) => quizId !== null))
      .subscribe((quizId: string) => {
        // Redirect to add questions page.
        this.router.navigate(['/quizzes/edit/' + quizId + '/add']);
      });
  }
}
