import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent {
  @Input() user: User;
  @Output() birthday: EventEmitter<User> = new EventEmitter();

  constructor() {
    setInterval(() => {
      this.user.age++;
      this.birthday.emit(this.user);
    }, 1000);
  }
}
