import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  allUsers!: Users[]

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void{
    this.userService.getUsers().subscribe(res => {
      this.allUsers = Object.values(res)
    })
  }

  addUser(user: Users): void{
    this.userService.addUser(user).subscribe(() => {
      this.allUsers.push(user)
    })
  }
}
