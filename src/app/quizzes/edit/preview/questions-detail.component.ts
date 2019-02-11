import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizzesService } from '../../quizzes.service';
import { IQuestion } from 'src/app/shared/models/question.model';
import { QuizBuilderService } from '../quiz-builder.service';

    @Component({
        selector: 'app-question-detail',
        templateUrl: './questions-detail.component.html'
})
export class QuestionsDetailsComponent implements OnInit {

    get question(): IQuestion {
        return this.quizBuilder.currentQuestion;
    }

    constructor(private quizzesServer: QuizzesService,
                private quizBuilder: QuizBuilderService) { }

    ngOnInit(): void {
    }

    onEditClick(): void {
        window.alert('Edit question is not yet implemented!');
    }
}
