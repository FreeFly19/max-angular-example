import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get('/assets/users.json') as Observable<User[]>;
  }
}
