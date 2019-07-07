import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuizBuilderService } from '../quiz-builder.service';
import { IQuestion, IAnswer } from 'src/app/shared/models/question.model';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { QuizzesService } from '../../quizzes.service';

@Component({
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  editQuestionForm: FormGroup;
  questionModel: IQuestion;

  questionId: string;

  get answers(): FormArray {
    return <FormArray> this.editQuestionForm.get('answers');
  }

  set question(question: IQuestion) {
    this.quizBuilder.currentQuestion = question;
  }

  get quizId(): string {
    return this.quizBuilder.quizId;
  }

  get question(): IQuestion {
    return this.quizBuilder.currentQuestion;
  }

  constructor(private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private quizBuilder: QuizBuilderService,
              private quizzesService: QuizzesService) {
  }

  ngOnInit() {
    this.questionId = this.router.url.split('/')[5];

    this.editQuestionForm = this.fb.group({
      question: ['', [Validators.required, Validators.minLength(10)]],
      answers: this.fb.array([this.initializeAnswer()]),
      shouldShuffle: false
    });

    // if (typeof this.quizBuilder.currentQuestion === 'undefined' ||
    //     this.quizBuilder.currentQuestion._id !== this.questionId) {
    this.quizzesService.getQuestionById(this.questionId).subscribe(
      (res => this.handleQuestionFetching(res))
    );
    // }
  }

  saveClicked() {
    window.alert('Saving will be implemented soon!');
  }

  addAnswer(): void {
    this.answers.push(this.buildAnswer(null));
  }

  removeLastAnswer(): void {
    this.answers.removeAt(this.answers.length - 1);
  }

  private handleQuestionFetching(res: ServerResponse): void {
    if (res.success) {
      this.quizBuilder.currentQuestion = res.data;

      this.editQuestionForm.patchValue({
        question: this.question.question,
      });

      this.removeLastAnswer();
      this.question.answers.forEach(answer => {
        this.answers.push(this.buildAnswer(answer));
      });

      this.toastr.success(res.message);
    } else {
      this.toastr.error('Could not load quiz question! Check for errors');
    }
  }

  private handleQuestionSaving(res: ServerResponse): void {
    if (res.success) {
      console.log(res.data);
      window.alert('Saving will be implemented soon!');
      this.toastr.success(res.message);
    }
  }

  private initializeAnswer(): FormGroup {
    return this.fb.group({
      answer: ['', Validators.required],
      isCorrect: [false]
    });
  }

  private buildAnswer(answer: IAnswer): FormGroup {
    console.log(answer === null);
    return this.fb.group({
      answer: [answer === null ? '' : answer.answer, Validators.required],
      isCorrect: [answer === null ? false : answer.isCorrect]
    });
  }
}
