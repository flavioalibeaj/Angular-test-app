import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<Users[]>{
  //   return this.http.get<Users[]>("https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts.json")
  // }
  getUsers(){
    return this.http.get("https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts.json")
  }

  // addUser(newUser: Users): Observable<Users>{
  //   return this.http.post<Users>("https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts.json", newUser)
  // }
  addUser(newUser: {id: number, name: string, age: number, email: string, location: string,  password: string}){
    return this.http.post("https://angulardb-12eb9-default-rtdb.firebaseio.com/newPosts.json", newUser)
  }
}
