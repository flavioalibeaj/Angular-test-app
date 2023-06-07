import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { User } from '../model/user';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  photoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  allUsers!: User[]
  constructor(private service: ExerciseService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers = () => {
    this.service.getUsers().subscribe(res => {
      this.allUsers = res
    })
  }

}
