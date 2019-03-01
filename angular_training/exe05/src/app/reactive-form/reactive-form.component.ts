import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userFormGroup: FormGroup;
  isNotValid = false;
  errors = '';
  name: AbstractControl;
  email: AbstractControl;
  constructor(fb: FormBuilder) {
    this.userFormGroup = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', Validators.email]
    });
    this.name = this.userFormGroup.controls.name;
    this.email = this.userFormGroup.controls.email;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('ok');
    console.log(this.userFormGroup.value);
    if (this.userFormGroup.invalid) {
      this.errors = this.getValidationError(this.userFormGroup);
      this.isNotValid = true;
    }
  }

  getValidationError(form: FormGroup) {
    return Object.keys(form.controls).reduce((prev, next, index) => {
      console.log(prev)
      if (form.controls[next].errors !== null) {
        return prev + Object.keys(form.controls[next].errors).reduce((prev2, next2) => {
          console.log(prev2)
          return prev2 + next2;
        }, '');
      }
    }, '');
  }

}
