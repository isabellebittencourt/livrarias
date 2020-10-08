import { Injectable } from '@angular/core';
import { book } from '../models/book';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl ='http://localhost:1234/livro';

  constructor(private http: HttpClient) { }

  listBook(): Observable<book[]>{
      return this.http.get<book[]>(`${this.baseUrl}/listar`);
  }

  createBook(book : book):Observable<book>{
    return this.http.post<book>(`${this.baseUrl}/cadastrar`, book);
  }

  getBook(bookId : String):Observable<book> {
    return this.http.get<book>(`${this.baseUrl}/buscar/${bookId}`);
  }

  updateBook(book:book): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizar/${book._id}`, book);
  }

  deleteBook(bookId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletar/${bookId}`);
  }
}
