import { Injectable } from '@angular/core';
import { Users } from '../model/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<Users> = [
    {id: 0, name: "Juxhin", age: 27, email: "email.com", location: "California", password: "notmypasword"},
    {id: 1, name: "Flavio", age: 20, email: "email.com", location: "Seattle", password: "12345"},
    {id: 2, name: "Dafina", age: 17, email: "email.com", location: "Tirane", password: "54321"},
    {id: 3 ,name: "Elvis", age: 26, email: "email.com", location: "New York", password: "password"}
  ]

  constructor() { }

  getAllPosts(){
    return this.users
  }

  getUserByUserId(userId: number): Users | undefined{
    return this.users.find(user => user.id === userId);
  }
}
