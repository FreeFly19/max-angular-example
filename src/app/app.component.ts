import {Component} from '@angular/core';
import {User} from './user/user.model';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'app';
  users: User[] = [];

  constructor(private us: UserService) {}

  onUserBirthday(user: User) {
    console.log(`${user.name} has a birthday today, he/she is ${user.age}`);
  }

  loadUsers() {
    this.us.getAllUsers().subscribe(users => this.users = this.users.concat(users));
  }
}
