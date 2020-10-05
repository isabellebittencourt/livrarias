import { userSchema } from './../models/userSchema';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:1234/visualizar/usuario';
  
  constructor(private http: HttpClient) {   }

  list(): Observable<userSchema[]>{
    return this.http.get<userSchema[]>(this.baseUrl)
  }
}
