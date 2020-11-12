import { Component, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import { Router } from "@angular/router";
import { BookService } from 'src/app/services/book.service';
import { categoria } from 'src/app/models/categoria';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
 
  categoriaColumns : string[] = ["categoria"]
  categorias:categoria[] = [];
  categoriaTable: MatTableDataSource<categoria> = 
    new MatTableDataSource<categoria>(this.categorias);
 
  book: book = new book();
  categoriaName : string;
  categoria:categoria = new categoria();
  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook() : void{
      this.book.categoria = this.categorias;
      console.log(this.book);
      this.service.createBook(this.book).subscribe((livro) =>{
        this.router.navigate(['/']);
      }) 
  }

  addCategoria(): void{
    this.categoria = new categoria();
    this.categoria.nome = this.categoriaName;
    this.categorias.push(this.categoria)
    console.log( this.categorias);
    this.categoriaTable._updateChangeSubscription();
    
    this.categoriaName = "";
  }

}
