import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import { Router } from "@angular/router";
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: book = {
    titulo : "",
    autor : "",
    editora :"",
    edicao: "",
    anoPublicacao : new Date(),
    preco : 0,
    quantidade : 0,
    categoria : []
  }
  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook() : void{
      this.service.createBook(this.book).subscribe((livro) =>{
        this.router.navigate(['/']);
      })
  }

}
