import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1234/usuario';

  constructor(private http: HttpClient) { }

  listUsers(): Observable<user[]> {
    return this.http.get<user[]>(`${this.baseUrl}/listar`);
  }

  createUser(user : user):Observable<user> {
    return this.http.post<user>(`${this.baseUrl}/cadastrar`, user);
  }

  updateUser(user : user):Observable<user> {
    return this.http.put<user>(`${this.baseUrl}/atualizar/${user._id}`, user);
  }

  deleteUser(userId : String):Observable<user> {
    return this.http.delete<user>(`${this.baseUrl}/deletar/${userId}`);
  }

  getUser(userId : String):Observable<user> {
    return this.http.get<user>(`${this.baseUrl}/buscar/${userId}`);
  }



}
