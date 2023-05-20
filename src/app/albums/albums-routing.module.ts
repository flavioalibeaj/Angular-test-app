import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumdataComponent } from './albumdata/albumdata.component';

const routes: Routes = [
  {path: "", component: AlbumsComponent},
  {path: "album-data/:id", loadChildren: ()=> import("./albumdata/albumdata.module").then(m => m.AlbumdataModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
