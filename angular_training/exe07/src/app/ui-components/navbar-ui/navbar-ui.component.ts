import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrls: ['./navbar-ui.component.css']
})
export class NavbarUiComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {

  }

  onLogout() {
    this.authService.logout();
  }
}
