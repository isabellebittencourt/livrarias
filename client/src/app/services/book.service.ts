import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookSchema } from './../models/bookSchema';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:1234/visualizar/livro';

  constructor(private http: HttpClient) { }

  list(): Observable<bookSchema[]>{
    return this.http.get<bookSchema[]>(this.baseUrl)

  }
}
