import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { AuthService } from './auth.service';
import { Router } from '@angular/router';
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
    console.log(this.loginForm.value);
    
    this.toastr.info('Login form submitted');
    // this.errorMessage = 'Please enter a user name and password.';
  }

  // Only for testing
  populateTestData(): void {
    this.loginForm.patchValue({
      username: 'ivancho_1998',
      password: '123456',
    });
  }
}
