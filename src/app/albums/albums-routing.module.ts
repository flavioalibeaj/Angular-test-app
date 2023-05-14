import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumdataComponent } from './albumdata/albumdata.component';

const routes: Routes = [
  {path: "", component: AlbumsComponent},
  {path: ":id/:title", component: AlbumdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
