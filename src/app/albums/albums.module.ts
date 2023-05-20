import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumdataComponent } from './albumdata/albumdata.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


@NgModule({
  declarations: [
    AlbumdataComponent,
    PhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule
  ]
})
export class AlbumsModule { }
