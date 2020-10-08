import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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
  constructor(private route:ActivatedRoute, private router: Router, private service: BookService) { }

  ngOnInit(): void {
    this.book._id = this.route.snapshot.paramMap.get('id');

    this.service.getBook(this.book._id).subscribe(returnedBook => {
      this.book = returnedBook;
    });
  }

  updateBook() : void{
      this.service.updateBook(this.book).subscribe((livro) =>{
        this.router.navigate(['/']);
      })
  }

}
