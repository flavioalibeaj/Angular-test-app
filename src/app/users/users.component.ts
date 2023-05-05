import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { UserService } from '../services/user.service';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  // allUsers!: Users[]
  allUsers: any[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUser()
  }

  // getUser(): void{
  //   this.userService.getUsers().subscribe(res => {
  //     this.allUsers = res
  //   })
  // }
  getUser(): void{
    this.userService.getUsers().subscribe(res => {
      this.allUsers = Object.values(res)
    })
  }

  // addUser(user: Users): void{
  //   this.userService.addUser(user).subscribe(() => {
  //     this.allUsers.push(user)
  //     console.log("hello")
  //   })
  // }
  addUser(newUser: {id: number, name: string, age: number, email: string, location: string,  password: string}): void{
    this.userService.addUser(newUser).subscribe((result) => {
      this.allUsers.push(newUser)
      console.log(result)
    })
  }
}
