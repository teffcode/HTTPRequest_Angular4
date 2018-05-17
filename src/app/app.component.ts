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

  constructor(public usersService: UsersService) {}

  searchUsers(){
    this.usersService.getUsers()
      .subscribe(response => {
        console.log('res - ', response);
      });
  }
}
