import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Users } from '../model/users';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  inputValue = "Log in"

  constructor(private router: Router, private userService: UserService) {}

  login(loginUser: {username: string, password: string}){
    this.userService.getUsers()
      .pipe(map(res => {
        const products = []
        for(const key in res){
          products.push({...res[key], userId: key})
        }
        return products
      }))
      .subscribe(res => {
        console.log(res)
        for(const user of res){
          if(user.name === loginUser.username && user.password === loginUser.password){
            this.router.navigate(["/users"])
          }
        }
      })
    }
}
