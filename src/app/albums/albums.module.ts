import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumdataComponent } from './albumdata/albumdata.component';


@NgModule({
  declarations: [
    AlbumdataComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule
  ]
})
export class AlbumsModule { }
