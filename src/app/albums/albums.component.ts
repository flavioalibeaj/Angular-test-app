import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{

  allAlbums: Album[] = []
  album?: Album
  albumId!: number
  sliceUpTo: number = 20
  albumsLeftToSee!: number

  constructor(private albumsService: AlbumsService) { }
  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    this.albumsService.getAlbums().subscribe(result => {
      this.allAlbums = result
      this.albumsLeftToSee = this.allAlbums.length - this.sliceUpTo
    })
  }

  addAlbum(newAlbum: Album){
    this.albumsService.addAlbum(newAlbum).subscribe(result => {
      this.allAlbums?.push(result)
    })
  }

  deleteAlbum(album: Album){
    this.albumId = album.id
    this.albumsService.deleteAlbum(album).subscribe(() => {
      this.allAlbums?.splice(this.allAlbums.findIndex(alb => album.id === alb.id), 1)
      this.albumsLeftToSee--
    })
  }

  editAlbum(album: Album){
  }

  showMoreAlbums(){
    this.sliceUpTo += 20
    this.albumsLeftToSee -= 20
  }
}
