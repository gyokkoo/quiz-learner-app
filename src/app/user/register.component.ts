import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  readonly USERNAME_REGEX = new RegExp('^[A-Za-z0-9_\\-\\.]+$');
  
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.USERNAME_REGEX)]],
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      // confirmPassword: ['', Validators.required]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log('Form submitted!');
    console.log('Todo: send request to server');
    console.log(this.registerForm);
    console.log(this.registerForm.value);

    this.authService.registerUser(this.registerForm.value);
  }

  // Only for testing
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
}
