import { Component, ViewChild } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  @ViewChild("child") child!: CourseCardComponent;

  title: string = "courses page";
  parentVar: string = "Parent Variable"

  courseDesc!: string

  showDescription(desc: string) {
    this.courseDesc = desc
  }

  showChildInfo() {
    console.log(this.child)
  }
}
