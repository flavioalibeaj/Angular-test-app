import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component'

const routes: Routes = [
  {path: "", component: FormComponent},
  {path: "users", loadChildren: () => import("./users/users.module").then(m => m.UsersModule)},
  {path: "post", loadChildren: () => import("./post/post.module").then(m => m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
