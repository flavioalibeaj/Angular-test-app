import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>("https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts.json")
  }

  addUser(newUser: Users): Observable<Users>{
    return this.http.post<Users>("https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts.json", newUser)
  }

  deleteUser(userId: string): Observable<any>{
    return this.http.delete<any>(`https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts/${userId}.json`)
  }

  updateUser(userId: string, value: Users){
    return this.http.put(`https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts/${userId}.json`, value)
  }

  getUserFromUserId(userId: string): Observable<Users>{
    return this.http.get<Users>(`https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts/${userId}.json`)
  }

  addMessage(userId: string, newMessage: string): Observable<any>{
    return this.http.post<any>(`https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts/${userId}/messages.json`, newMessage)
  }

  getMessages(userId: string): Observable<{ message: string }[]>{
    return this.http.get<{ message: string }[]>(`https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts/${userId}/messages.json`)
  }
}
