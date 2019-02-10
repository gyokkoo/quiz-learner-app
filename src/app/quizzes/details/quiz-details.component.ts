import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { QuizzesService } from '../quizzes.service';
import { IQuiz } from 'src/app/shared/models/quiz.model';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { QuizSolverService } from '../solve/quiz-solver.service';

@Component({
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit, OnDestroy {

  quiz: IQuiz;
  modalCloseResult: string;

  private id: string;
  private sub: any;

  constructor(private quizzesService: QuizzesService,
              private quizSolver: QuizSolverService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
    this.quiz = this.getInitialQuizValues();
  }

  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title-delete' }).result
      .then(
        (result) => {
        // Deletion is confirmed by the user, so do it!
        // Warning it will delete also all questions attached to the quiz
        this.quizzesService.deleteQuizById(this.id).subscribe(
          (res: ServerResponse) => this.handleQuizDeletion(res)
        );
        this.modalCloseResult = `Closed with: ${result}`;
      }, (reason) => {
        this.modalCloseResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id) {
      this.quizzesService.getQuizById(this.id).subscribe(
        (data => this.handleQuizDetailsFetching(data)),
        (error => this.handleQuizDetailsError(error)),
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private handleQuizDetailsFetching(res): void {
    if (res.success) {
      // TODO: map properly the data
      const quizData = res.quiz;
      this.quiz.id = quizData._id;
      this.quiz.name = quizData.name;
      this.quiz.description = quizData.description;
      this.quiz.dateCreated = new Date(quizData.dateCreated);
      this.quiz.questionsCount = quizData.questions.length;
      this.quiz.creator = res.creator;

      this.quizzesService.lastQuiz = this.quiz;
      console.log(this.quiz);
      this.quizSolver.questions = res.data;

      this.toastr.success(res.message);
    } else {
      this.toastr.error(res.message);
    }
  }

  private handleQuizDeletion(res: ServerResponse): void {
    if (res.success) {
      this.toastr.success(res.message);
      this.router.navigate(['/quizzes/all']);
    } else {
      this.toastr.error(res.message);
    }
  }

  private handleQuizDetailsError(error): any {
    // TODO: Handle better
    this.toastr.error(error.message);
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
