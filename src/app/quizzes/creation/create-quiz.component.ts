import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  closeResult: string;

  createQuizForm: FormGroup;

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private quizzesService: QuizzesService) {
  }

  ngOnInit(): void {
    this.createQuizForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    const quiz = this.createQuizForm.value;
    this.quizzesService.createQuiz(quiz)
      .subscribe(
        data => this.handleQuizCreation(data),
        error => this.handleError(error));
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.onSubmit();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  private handleQuizCreation(data: any) {
    if (data.success) {
      console.log(data);
      this.toastr.success(data.message);
      this.router.navigate(['/quizzes/edit/' + data.quiz._id + '/questions']);
    } else {
      this.toastr.error(data.message);
    }
  }

  private handleError(error: any) {
    console.log(error);

    this.toastr.error(error.message);
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
