import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { QuizzesService } from '../quizzes.service';
import { ServerResponse } from 'src/app/shared/models/server-response.model';
import { QuizSolverService } from '../solve/quiz-solver.service';

@Component({
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit, OnDestroy {
  quiz: any;
  modalCloseResult: string;

  id: string;
  private sub: any;

  constructor(
    private quizzesService: QuizzesService,
    private quizSolver: QuizSolverService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.quiz = this.getInitialQuizValues();
  }

  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title-delete' })
      .result.then(
        (result) => {
          // Deletion is confirmed by the user, so do it!
          // Warning it will delete also all questions attached to the quiz
          this.quizzesService
            .deleteQuizById(this.id)
            .subscribe((res: ServerResponse) => this.handleQuizDeletion(res));
          this.modalCloseResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.modalCloseResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    if (this.id) {
      this.quizzesService.getQuizById(this.id).subscribe((quizInfo: any) => {
        this.quiz = quizInfo;
        this.quizzesService.currentQuiz = quizInfo;
        this.quizSolver.questions = quizInfo.questions;
      });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private handleQuizDetailsFetching(res): void {
    this.quiz = res.quiz;

    this.quizzesService.currentQuiz = this.quiz;
    console.log(this.quiz);
    this.quizSolver.questions = res.data;

    this.toastr.success(res.message);
  }

  private handleQuizDeletion(res: ServerResponse): void {
    if (res.success) {
      this.toastr.success(res.message);
      this.router.navigate(['/quizzes/all']);
    } else {
      this.toastr.error(res.message);
    }
  }

  private getInitialQuizValues(): any {
    // Return an initialized object
    return {
      id: this.id,
      name: null,
      creator: null,
      description: null,
      dateCreated: null,
      rating: null,
      questionsCount: 0,
    };
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
