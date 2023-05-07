import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../model/users';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  allUsers: Users[] = []
  currentUserId!: string
  @ViewChild("editedData")  editedUser?: NgForm


  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void{
    this.userService.getUsers().pipe(map(res => {
      const products = []
      for(const key in res){
        products.push({...res[key], userId: key})
      }
      return products
    }))
    .subscribe(res => {
      if(res){
        console.log(res)
        this.allUsers = Object.values(res)
      }
    })
  }

  addUser(user: Users): void{
    this.userService.addUser(user).subscribe(() => {
      this.allUsers.push(user)
    })
  }

  deleteUser(user: Users){
    this.userService.deleteUser(user.userId).subscribe(() => {
      this.allUsers?.splice(this.allUsers.indexOf(user), 1)
    })
  }

  saveEditChanges(user: Users){
    console.log(this.editedUser)
    this.userService.updateUser(this.currentUserId, user).subscribe(updatedUser => {
      // console.log(updatedUser)
    })
  }

  editUserButton(user: Users){
    this.currentUserId = user.userId
    let currentUser = this.allUsers.find(u => {
      return u.userId === user.userId
    })

    this.editedUser?.setValue({
      name: currentUser?.name,
      age: currentUser?.age,
      email: currentUser?.email,
      password: currentUser?.password,
      location: currentUser?.location,
    })

    user.name = this.editedUser?.value.name
    user.age = this.editedUser?.value.age
    user.email = this.editedUser?.value.email
    user.password = this.editedUser?.value.password
    user.location = this.editedUser?.value.location

    this.saveEditChanges(user);
  }
}
