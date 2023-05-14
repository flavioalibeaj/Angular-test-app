import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseCardComponent } from './course-card/course-card.component';


@NgModule({
  declarations: [
    CourseCardComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [
    CourseCardComponent
  ]
})
export class CoursesModule { }
