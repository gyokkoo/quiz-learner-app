import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { QuizzesService, QuizDetails } from '../../quizzes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

const minQuizTitleLength = 5;
const maxQuizTitleLength = 100;
const maxQuizDescriptionLength = 500;

@Component({
  selector: 'app-edit-quiz-info',
  templateUrl: 'edit-quiz-info.component.html',
  styleUrls: ['../../quiz-form.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditQuizInfoComponent implements OnInit {
  quiz: any;

  formGroup: FormGroup;

  loading: boolean;

  private id: string;

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
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private quizzesService: QuizzesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.router.url.split('/')[3];

    this.loading = true;
    this.quizzesService.getQuizById(this.id).subscribe((quizInfo) => {
      this.quiz = quizInfo;
      this.formGroup = this.formBuilder.group({
        title: [
          this.quiz.name,
          [
            Validators.required,
            Validators.minLength(minQuizTitleLength),
            Validators.maxLength(maxQuizTitleLength),
          ],
        ],

        description: [
          this.quiz.description,
          [Validators.required, Validators.maxLength(maxQuizDescriptionLength)],
        ],
      });

      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  onSave(): void {
    if (this.formGroup.valid) {
      const quizDetails: QuizDetails = {
        id: this.id,
        title: this.formGroup.get('title').value.trim(),
        description: this.formGroup.get('description').value.trim(),
      };

      this.quizzesService
        .editQuizBasicInfo(quizDetails)
        .pipe(filter((quizId) => quizId !== null))
        .subscribe((quizId: string) => {
          // Redirect to next page.
          this.router.navigate(['/quizzes/edit/' + quizId + '/add']);
        });
    }
  }
}
