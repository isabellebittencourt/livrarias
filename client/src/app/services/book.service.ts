import { Injectable } from '@angular/core';
import { book } from '../models/book';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl ='http://localhost:1234/visualizar/livro';
  baseUrlCadastro = 'http://localhost:1234/cadastrar/livro';
  constructor(private http: HttpClient) { }

  listBook(): Observable<book[]>{
      return this.http.get<book[]>(this.baseUrl);
  }

  createBook(book : book):Observable<book>{
    return this.http.post<book>(this.baseUrlCadastro , book);
  }
}
