import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
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
  messages: {message: string}[] = []

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute ){
    this.activatedRoute.params.subscribe(params => {
      this.userId = params["userId"]
    })
  }

  ngOnInit(): void {
    this.getUserFromUserId()
    this.getMessages()
  }

  getUserFromUserId(){
    return this.userService.getUserFromUserId(this.userId).subscribe(res => {
      this.userDetails = res
    })
  }

  addMessage(newMessage: string): void {
    this.userService.addMessage(this.userId, newMessage).subscribe(() => {
      this.userService.getMessages(this.userId).subscribe((res) => {
        this.messages = Object.values(res);
      });
    });
  }

  getMessages(){
    this.userService.getMessages(this.userId)
    .pipe(
      map(res => {
        if (res === null) {
          return [];
        } else {
          this.messages = Object.values(res)
          return this.messages;
        }
      })
    )
    .subscribe(
      // messages => {
      // this.messages = messages
      // console.log(this.messages)
      // }
    );
  }
}
