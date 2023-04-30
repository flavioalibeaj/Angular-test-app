import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: Array<Users> | undefined


  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this.users = this.userService.getAllPosts()
  }
}
