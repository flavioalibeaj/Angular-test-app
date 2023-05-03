import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable} from 'rxjs';
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

  addNewPost(newPost: Post): Observable<Post>{
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", newPost)
  }

  deletePost(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  updatePost(id: number, value: Post): Observable<any>{
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, value)
  }
}
