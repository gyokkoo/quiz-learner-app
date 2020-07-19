import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  readonly USERNAME_REGEX = new RegExp('^[A-Za-z0-9_\\-\\.]+$');
  readonly headerTitle = 'Register';

  errorMessage: string;
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.USERNAME_REGEX),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.authService
      .registerUser(this.registerForm.value)
      .subscribe((data) => this.handleUserRegistration(data));
  }

  // Only for development testing
  populateTestData(): void {
    this.registerForm.patchValue({
      username: 'ivancho_1998',
      firstName: 'Ivan',
      lastName: 'Petrov',
      password: '123456',
      confirmPassword: '123456',
      // email: 'ivan.petrov@gmail.com'
    });
  }

  private handleUserRegistration(data: any) {
    if (data.success) {
      this.toastr.success(data.message);
      this.router.navigate(['/users/login']);
    } else {
      this.errorMessage = data.message;
      this.toastr.error(data.message);
    }
  }
}
