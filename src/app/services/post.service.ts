import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { Comments } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }

  getPostByPostId(postId: number | undefined): Observable<Post>{
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/" + postId)
  }

  getCommentsByPostId(postId: number | undefined): Observable<Comments[]>{
    return this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/posts/" +postId + "/comments")
  }

  getNewPost(newPost: Post): Observable<Post>{
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", newPost)
  }
}
