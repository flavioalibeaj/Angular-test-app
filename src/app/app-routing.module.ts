import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", loadChildren: () => import("./form/form.module").then(m => m.FormModule) },
  { path: "users", loadChildren: () => import("./users/users.module").then(m => m.UsersModule) },
  { path: "post", loadChildren: () => import("./post/post.module").then(m => m.PostModule) },
  { path: "courses", loadChildren: () => import("./courses/courses.module").then(m => m.CoursesModule) },
  { path: "albums", loadChildren: () => import("./albums/albums.module").then(m => m.AlbumsModule) },
  { path: "siblings", loadChildren: () => import("./data-between-siblings/data-between-siblings.module").then(m => m.DataBetweenSiblingsModule) },
  { path: "exercise", loadChildren: () => import("./exercise/exercise.module").then(m => m.ExerciseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
