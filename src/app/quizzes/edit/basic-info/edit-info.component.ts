import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizzesService } from '../../quizzes.service';
import { ActivatedRoute, Router, RoutesRecognized, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IQuiz } from 'src/app/shared/models/quiz.model';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  quiz: IQuiz;

  quizInfoForm: FormGroup;

  private id: string;

  constructor(private fb: FormBuilder,
              private quizzesService: QuizzesService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.router.url.split('/')[3];
    this.quizzesService.getQuizById(this.id).subscribe(
      (data => this.handleQuizDetailsFetching(data)));
      this.quizInfoForm = this.fb.group({
        title: [''],
        description: [''],
      });
    this.quiz = this.getInitialQuizValues();
  }

  onSave(): void {
    const newValues = this.quizInfoForm.value;
    window.alert('Updating quiz info is not implemented yet!');
  }

  private handleQuizDetailsFetching(data: any): void {
    if (data.success) {
      // TODO: map properly the data
      const quizData = data.quiz;
      this.quiz.id = quizData._id;
      this.quiz.name = quizData.name;
      this.quiz.description = quizData.description;
      this.quiz.dateCreated = new Date(quizData.dateCreated);
      this.quiz.questionsCount = quizData.questions.length;
      this.quiz.creator = data.creator;

      // Populate form
      this.quizInfoForm.patchValue({
        title: this.quiz.name,
        description: this.quiz.description,
      });

      console.log(this.quiz);

      this.toastr.success(data.message);
    } else {
      this.toastr.error(data.message);
    }
  }

  private getInitialQuizValues(): IQuiz {
    // Return an initialized object
    return {
      id: this.id,
      name: null,
      creator: null,
      description: null,
      dateCreated: null,
      rating: null,
      questionsCount: 0
   };
  }
}
