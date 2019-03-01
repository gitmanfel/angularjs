import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(fb: FormBuilder, public authService : AuthService) {
    this.loginFormGroup = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    this.authService.validateCredentials(this.loginFormGroup.value.username, this.loginFormGroup.value.password);
  }
}
