import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1234/visualizar/usuario';
  baseUrlCadastro = 'http://localhost:1234/cadastrar/usuario';
  constructor(private http: HttpClient) { }

  listUsers(): Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl );
}
createUser(user : user):Observable<user>{
  return this.http.post<user>(this.baseUrlCadastro , user);
}
}
