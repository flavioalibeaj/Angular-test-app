import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';
import { Photos } from '../model/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getAlbumDetailsByAlbumId(albumId: number | undefined): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
  }

  addAlbum(newAlbum: Album): Observable<Album>{
    return this.http.post<Album>("https://jsonplaceholder.typicode.com/albums", newAlbum)
  }

  deleteAlbum(album: Album): Observable<Album>{
    return this.http.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
  }

  editAlbum(album: Album, newValue: Album): Observable<Album>{
    return this.http.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, newValue)
  }

  getPhotosByAlbumId(albumId: number): Observable<Photos[]>{
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }

  // getPhotoDetailsByPhotoId()
}
