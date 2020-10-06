import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: book = {
    titulo : "teste",
    autor : "teste",
    editora :"teste",
    edicao: "teste",
    anoPublicacao : new Date(),
    preco : 10,
    quantidade : 20,
    categoria : [{categoria : "teste"}]
  }
  constructor(private service: BookService) { }

  ngOnInit(): void {
  }

  createBook() : void{
      this.service.createBook(this.book).subscribe((livro) =>{
            console.log(livro);
      })
  }

}
