import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    console.log('Form submitted!');
    console.log('Todo: send request to server');
    console.log(this.registerForm);
    console.log(JSON.stringify(this.registerForm.value));
  }

  populateTestData(): void {
    this.registerForm.patchValue({
      username: 'ivancho_1998',
      firstName: 'Ivan',
      lastName: 'Petrov',
      // email: 'ivan.petrov@gmail.com'
    });
  }
}
