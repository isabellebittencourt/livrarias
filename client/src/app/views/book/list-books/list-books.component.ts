import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

 
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.list().subscribe((books) =>{
      console.log(books);
    });
  }

  navigateToCreateBook(): void {
    this.router.navigate(['book/create']);
    
  }
}
