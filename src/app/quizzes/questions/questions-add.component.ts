import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IQuestion } from 'src/app/shared/models/question.model';
import { QuizBuilderService } from './quiz-builder.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { ServerResponse } from 'src/app/shared/models/server-response.model';

@Component({
  selector: 'app-question-add',
  templateUrl: './questions-add.component.html',
  styleUrls: ['./questions-add.component.scss']
})
export class QuestionsAddComponent implements OnInit {
  questionForm: FormGroup;
  questionModel: IQuestion;

  get answers(): FormArray {
    return <FormArray> this.questionForm.get('answers');
  }

  constructor(private formBuilder: FormBuilder,
              private quizBuilder: QuizBuilderService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.questionModel = {
      quizId: this.router.url.split('/')[3],
      question: '',
      answers: [{
        answer: '',
        isCorrect: false
      }],
      shouldShuffle: false
    };

    this.questionForm = this.formBuilder.group({
      question: ['', [Validators.required, Validators.minLength(10)]],
      answers: this.formBuilder.array([this.buildAnswer()]),
      shouldShuffle: false
    });
  }

  save() {
    const quizId = this.questionModel.quizId;
    this.questionModel = this.questionForm.value;
    this.questionModel.quizId = quizId;

    this.quizBuilder.createQuestion(this.questionModel)
      .subscribe(res => this.handleQuestionCreation(res));
  }

  addAnswer(): void {
    this.answers.push(this.buildAnswer());
  }

  private handleQuestionCreation(res: ServerResponse) {
    if (res.success) {
      console.log(res.data);
      this.toastr.success(res.message);
      this.questionForm.reset();
    }
  }

  private buildAnswer(): FormGroup {
    return this.formBuilder.group({
      answer: '',
      isCorrect: false,
    });
  }
}
