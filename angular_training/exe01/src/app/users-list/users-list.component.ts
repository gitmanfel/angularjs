import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users: User[];
  constructor() {
    this.users = [];
    this.users.push(
      { firstname: 'gilles', lastname: 'Bertrand' },
      { firstname: 'vincent', lastname: 'Urbain' },
      { firstname: 'stéphane', lastname: 'Chraoir' },
    );
  }

  ngOnInit() {
  }

}
