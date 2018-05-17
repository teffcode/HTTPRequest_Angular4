import { Component } from '@angular/core';
import { UsersService } from './services/users/users.service';
import { Users } from './services/users/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any;

  constructor(public usersService: UsersService) {}

  searchUsers(){
    this.usersService.getUsers()
      .subscribe(response => {
        this.users = response.body;
      });
  }
}
