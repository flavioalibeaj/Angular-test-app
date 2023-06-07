import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  allCourses = COURSES;
  onSeeInfoClick(description: string) {
    this.courseDescription.emit(description);
  }

  setClass(course: Course) {
    if (course.category === 'BEGINNER') {
      return 'beginner';
    } else if (course.category === 'INTERMEDIATE') {
      return 'intermediate';
    } else {
      return 'advanced';
    }
  }

  @Input()
  childVar!: string;

  @Output()
  courseDescription = new EventEmitter();
}
