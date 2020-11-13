import { Injectable } from '@angular/core';
import { purchase } from '../models/purchase';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  baseUrl ='http://localhost:1234/compra';

  constructor(private http: HttpClient) { }

  list(): Observable<purchase[]>{
      return this.http.get<purchase[]>(`${this.baseUrl}/listar`);
  }

  create(purchase : purchase):Observable<purchase>{
    return this.http.post<purchase>(`${this.baseUrl}/cadastrar`, purchase);
  }

  get(purchaseId : String):Observable<purchase> {
    return this.http.get<purchase>(`${this.baseUrl}/buscar/${purchaseId}`);
  }

  update(purchase:purchase): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizar/${purchase._id}`, purchase);
  }

  delete(purchaseId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletar/${purchaseId}`);
  }
}
