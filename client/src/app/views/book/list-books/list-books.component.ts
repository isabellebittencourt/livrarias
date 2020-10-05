import { bookSchema } from './../../../models/bookSchema';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  livros : bookSchema[] = [];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.list().subscribe((lista) =>{
    this.livros = lista;  
    console.log(this.livros);
    });
  }

  navigateToCreateBook(): void {
    this.router.navigate(['book/create']);
    
  }
}
