import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBetweenSiblingsComponent } from './data-between-siblings.component';

const routes: Routes = [
  { path: "", component: DataBetweenSiblingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBetweenSiblingsRoutingModule { }
