import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  readonly headerTitle = 'Log In';

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('Login form subbmited!');
    const userData = this.loginForm.value;
    
    this.authService.loginUser(userData).subscribe(
      data => this.handleUserLogin(data));
    // this.errorMessage = 'Please enter a user name and password.';
  }

  // Only for testing
  populateTestData(): void {
    this.loginForm.patchValue({
      username: 'ivancho_1998',
      password: '123456',
    });
  }

  private handleUserLogin(data: any) {
    if (data.success) {
      this.authService.storeUserData(data.token, data.user);

      this.toastr.success(data.message);
      this.router.navigate(['/welcome']);
    } else {
      this.errorMessage = data.message;
      this.toastr.error(data.message);
    }
  }
}
