import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user?: User
  userId!: number
  dataShowing: boolean = false

  constructor(private service: ExerciseService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.userId = params['id']
    })

    this.getUserData()
  }

  getUserData() {
    this.service.getUserByUserId(this.userId).subscribe(res => {
      this.user = res
    })
  }

  showAllDataButton() {
    this.dataShowing = true
  }

}
