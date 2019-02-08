import { Component, OnInit, OnDestroy } from '@angular/core';

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

    constructor() {
    }

    ngOnInit() {
        this.questions = [];
        for (let i = 1; i <= 10; i++) {
            this.questions.push({
                question: `Question ${i}`,
                id: i.toString()
            });
        }

        this.selectedQuestion = this.questions[0];
    }

    onSelected(question): void {
        this.selectedQuestion = question;
    }
}
