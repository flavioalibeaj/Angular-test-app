import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent {

  // photoId!: number
  // photoTitle!: string
  // photoUrl!: string

  // constructor(private activeRoute: ActivatedRoute, albumService:AlbumsService ){
  //   this.activeRoute.params.subscribe(res => {
  //     this.photoId = res['id']
  //   })
  // }

}
