import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { QuizzesService, QuizDetails } from '../../quizzes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-quiz-info',
  templateUrl: 'edit-quiz-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditQuizInfoComponent implements OnInit {
  quiz: any;

  quizInfoForm: FormGroup;

  loading: boolean;

  private id: string;

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
      this.quizInfoForm = this.formBuilder.group({
        title: [this.quiz.name],
        description: [this.quiz.description],
      });

      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  onSave(): void {
    if (this.quizInfoForm.valid) {
      const quizDetails: QuizDetails = {
        id: this.id,
        title: this.quizInfoForm.get('title').value.trim(),
        description: this.quizInfoForm.get('description').value.trim(),
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
