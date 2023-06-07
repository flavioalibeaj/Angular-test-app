import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: "", component: ExerciseComponent },
  { path: ":id", component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
