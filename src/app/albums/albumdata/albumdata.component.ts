import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/album';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Photos } from 'src/app/model/photos';

@Component({
  selector: 'app-albumdata',
  templateUrl: './albumdata.component.html',
  styleUrls: ['./albumdata.component.scss']
})
export class AlbumdataComponent implements OnInit{

  album?: Album
  albumId!: number
  photos: Photos[] = [];

  constructor(private activeRoute: ActivatedRoute, private albumService: AlbumsService){
    this.activeRoute.params.subscribe(res => {
      this.albumId = res['id']
    })
  }
  ngOnInit(): void {
    this.getAlbumDataByAlbumId()
    this.getPhotosByAlbumId()
  }

  getAlbumDataByAlbumId(){
    this.albumService.getAlbumDetailsByAlbumId(this.albumId).subscribe(res => {
      this.album = res
    })
  }

  getPhotosByAlbumId(){
    this.albumService.getPhotosByAlbumId(this.albumId).subscribe(res => {
      this.photos = res
    })
  }

}
