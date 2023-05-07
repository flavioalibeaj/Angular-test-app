import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit{

  userDetails: Users | undefined
  userId : string = ""

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute ){
    this.activatedRoute.params.subscribe(params => {
      this.userId = params["userId"]
    })
  }

  ngOnInit(): void {
    this.getUserFromUserId()
  }

  getUserFromUserId(){
    return this.userService.getUserFromUserId(this.userId).subscribe(res => {
      this.userDetails = res
      console.log(this.userDetails)
    })
  }

}
