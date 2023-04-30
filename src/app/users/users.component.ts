import { Component } from '@angular/core';
import { Users } from '../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: Array<Users> = [
    {name: "Juxhin", age: 27, email: "email.com", location: "California", password: "notmypasword"},
    {name: "Flavio", age: 20, email: "email.com", location: "Seattle", password: "12345"},
    {name: "Dafina", age: 17, email: "email.com", location: "Tirane", password: "54321"},
    {name: "Elvis", age: 26, email: "email.com", location: "New York", password: "password"}
  ]

  showAlert = (user: Users): void => {
    if(user.age >= 18){
      alert(user.name)
    } else {
      alert("Burg")
    }
  }
}
