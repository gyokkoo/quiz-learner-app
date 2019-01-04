import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

// import { Customer } from './customer';
import { debounceTime } from 'rxjs/operators';


@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address',
    email: 'Please enter a valid email address',
  };

  get addresses(): FormArray {
    return <FormArray> this.registerForm.get('addresses');
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [
                        Validators.required,
                        Validators.minLength(3),
                        Validators.pattern('[a-zA-Z]*')
      ]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
    });

    // const emailControl = this.registerForm.get('emailGroup.email');
    // emailControl.valueChanges.pipe(
    //   debounceTime(1000)
    // ).subscribe(
    //   value => this.setMessage(emailControl)
    // );
  }

  onSubmit() {
    console.log(this.registerForm);
    console.log('Saved: ' + JSON.stringify(this.registerForm));
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  private buildAddress(): FormGroup {
    return this.formBuilder.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  private setNotification(notifyVia: string): void {
    const phoneControl = this.registerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }

  private setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map(key => this.emailMessage += this.validationMessages[key])
        .join(' ');
    }
  }

  populateTestData(): void {
    this.registerForm.patchValue({
      firstName: 'Ivan',
      lastName: 'Petrov',
      // email: 'ivan.petrov@gmail.com',
      sendCatalog: false
    });
  }
}
