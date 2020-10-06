import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  
  livros : book[] = []; 
  constructor(private router:Router,private bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.listBook().subscribe((lista) =>{
        console.log(lista)
        this.livros = lista;  
    })
  }
  navigationToCreateBook() : void{
    this.router.navigate(['book/create'])
  }

}
