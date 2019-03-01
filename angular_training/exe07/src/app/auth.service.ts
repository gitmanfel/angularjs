import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor(private router: Router) { }
  isLoggedIn = new BehaviorSubject<boolean>(this.loggedIn);
  validateCredentials(username, password) {
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      this.emit();
      this.router.navigate(['admin']);
    }
  }
  logout() {
    this.loggedIn = false;
    this.emit();
    this.router.navigate(['home']);
  }
  emit() {
    this.isLoggedIn.next(this.loggedIn);
  }
}
