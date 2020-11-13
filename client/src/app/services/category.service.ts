import { Injectable } from '@angular/core';
import { categoria } from '../models/categoria';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl ='http://localhost:1234/categoria';

  constructor(private http: HttpClient) { }

  list(): Observable<categoria[]>{
      return this.http.get<categoria[]>(`${this.baseUrl}/listar`);
  }

  create(category : categoria):Observable<categoria>{
    return this.http.post<categoria>(`${this.baseUrl}/cadastrar`, category);
  }

  get(categoryId : String):Observable<categoria> {
    return this.http.get<categoria>(`${this.baseUrl}/buscar/${categoryId}`);
  }

  update(category:categoria): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizar/${category._id}`, category);
  }

  delete(categoryId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletar/${categoryId}`);
  }
}
