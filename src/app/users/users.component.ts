import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../model/users';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  addUserForm!: FormGroup
  editUserForm!: FormGroup
  allUsers: Users[] = []
  currentUserId!: string
  // @ViewChild("editedData") editedUser?: NgForm


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()

    this.addUserForm = this.createFormGroup()
    this.editUserForm = this.createFormGroup()
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      age: new FormControl(null, [Validators.required, Validators.min(16)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      location: new FormControl(null, Validators.required),
    })
  }

  getUser(): void {
    this.userService.getUsers().pipe(map(res => {
      const products = []
      for (const key in res) {
        products.push({ ...res[key], userId: key })
      }
      return products
    }))
      .subscribe(res => {
        if (res) {
          this.allUsers = Object.values(res)
        }
      })
  }

  addUser(): void {
    let user = this.addUserForm.value
    this.userService.addUser(user).subscribe(res => {
      user.userId = res.name
      this.allUsers.push(user)
    })
  }

  deleteUser(user: Users) {
    this.userService.deleteUser(user.userId).subscribe(() => {
      this.allUsers?.splice(this.allUsers.indexOf(user), 1)
    })
  }

  saveEditChanges(){
    this.userService.updateUser(this.currentUserId, this.editUserForm.value).subscribe(updatedUser => console.log(updatedUser))
  }

  editUserButton(user: Users){
    this.currentUserId = user.userId
    this.saveEditChanges();
  }
}
