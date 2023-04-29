import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component'
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component'
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "", component: FormComponent},
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "users", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
