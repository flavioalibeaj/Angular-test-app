import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumdataComponent } from './albumdata.component';
import { PhotoDetailsComponent } from '../photo-details/photo-details.component';

const routes: Routes = [
  {path: "", component: AlbumdataComponent},
  {path: "photo-details/:id", component: PhotoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumdataRoutingModule { }
