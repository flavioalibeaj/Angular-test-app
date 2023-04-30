import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit{
  user: Users | undefined
  userId: number | undefined

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserByUserId()
  }

  getUserByUserId(){
    if(this.userId){
      this.user = this.userService.getUserByUserId(this.userId);
      console.log(this.user);
    }
  }
}
