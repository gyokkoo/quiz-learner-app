import { Injectable, OnInit } from '@angular/core';
import { IQuiz } from 'src/app/shared/models/quiz.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { AuthService } from 'src/app/user/auth.service';
import { IQuestion, ISolvedQuestion } from 'src/app/shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizSolverService {
  questions: Array<ISolvedQuestion>;
  index: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean
  
  constructor() { }

  clearCache(): void {
    this.questions = null;
    this.index = null;
    this.isFirstQuestion = null;
    this.isLastQuestion = null;
  }

  printQuizState() : void {
    console.log('printing');
    console.log(this.questions);
  }

  checkQuiz(): void {
    let totalPoints = this.questions.length;
    let yourPoints = 0;

    for (let i = 0; i < this.questions.length; i++) {
      let answers = this.questions[i].answers;
      let isAnswerWrong = false;
      for (let j = 0; j < answers.length; j++) {
        if (answers[j].isCorrect != answers[j].isSelected) {
          isAnswerWrong = true
        } 
      }

      if (isAnswerWrong) {
        this.questions[i].isWrong = isAnswerWrong;
      } else {
        yourPoints++;
      }
    }

    console.log('Quiz solved!');
    console.log(yourPoints + ' / ' + totalPoints);
  }
}
