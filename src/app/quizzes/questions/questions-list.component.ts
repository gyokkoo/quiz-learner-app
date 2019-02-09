import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizBuilderService } from './quiz-builder.service';

export interface Question {
    question: string;
    id: string;
}

@Component({
    selector: 'app-questions-list',
    templateUrl: './questions-list.component.html'
})
export class QuestionsListComponent implements OnInit {

    questions: Question[];
    selectedQuestion: Question;
    mockedQuestions: any[];
    mockedSelectedQuestion: any;

    constructor(private quizBuilder: QuizBuilderService) {
    }

    ngOnInit() {
        this.questions = [];
        for (let i = 1; i <= 10; i++) {
            this.questions.push({
                question: `Question ${i}`,
                id: i.toString()
            });
        }

        this.mockedQuestions = this.quizBuilder.questionsMock;
        this.selectedQuestion = this.mockedQuestions[0];

        console.log(this.mockedQuestions);

        this.selectedQuestion = this.questions[0];
    }

    onSelected(question): void {
        this.quizBuilder.currentQuestion = question;
        this.selectedQuestion = question;
    }
}
