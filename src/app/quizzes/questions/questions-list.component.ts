import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizBuilderService } from './quiz-builder.service';
import { Router } from '@angular/router';
import { QuizzesService } from '../quizzes.service';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { ToastrService } from 'ngx-toastr';
import { IQuestion } from 'src/app/shared/models/question.model';

@Component({
    selector: 'app-questions-list',
    templateUrl: './questions-list.component.html'
})
export class QuestionsListComponent implements OnInit {

    questions: IQuestion[];
    selectedQuestion: IQuestion;

    mockedQuestions: any[];
    mockedSelectedQuestion: any;

    quizId: string;

    constructor(private quizBuilder: QuizBuilderService,
                private quizzesServce: QuizzesService,
                private toastr: ToastrService,
                private router: Router) {
    }

    ngOnInit() {
        this.questions = [];

        this.quizId = this.router.url.split('/')[3];

        this.quizzesServce.getAllQuestionsByQuizId(this.quizId)
            .subscribe(
                ((res: ServerResponse) => this.handleQuestionsFetched(res))
            );
    }

    onSelected(question: IQuestion): void {
        this.quizBuilder.currentQuestion = question;
        this.selectedQuestion = question;
    }

    private handleQuestionsFetched(res: ServerResponse) {
        if (res.success) {
            const questionsData = res.data;
            for (let i = 0; i < questionsData.length; i++) {
                this.questions.push(questionsData[i]);
            }
            if (questionsData.length > 0) {
                this.quizBuilder.currentQuestion = this.questions[0];
                this.selectedQuestion = this.questions[0];
            }
            console.log(this.questions);
            this.toastr.success(res.message);
        } else {
            this.toastr.error('Could not load quiz questions! Check for errors');
        }
    }
}
