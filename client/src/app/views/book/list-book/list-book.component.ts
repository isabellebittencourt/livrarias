
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ShoppingCartService } from './../../../services/shopping-cart.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  

  livros : book[] = [];
  livrosColumns: string[] = ['titulo', 'autor', 'editora', 'anoPublicacao', 'preco', 'quantidade', 'adicionar', 'editar', 'deletar'];
  constructor(private router:Router,private bookService : BookService, private carrinhoService : ShoppingCartService) { }

  ngOnInit(): void {
    this.bookService.listBook().subscribe(books =>{
        this.livros = books;  
    })
  }
  navigationToCreateBook() : void{
    this.router.navigate(['book/create'])
  }

  navigationToCreateUser() : void{
    this.router.navigate(['user/create'])
  }

  deleteBook(bookId : String) {
    const confirmation = confirm('Deseja mesmo deletar este livro?');

    if(!confirmation) {
      return;
    }

    this.bookService.deleteBook(bookId).subscribe();

    window.location.reload();
  }

 
addBookToCart(book){

  this.carrinhoService.addItem(book);
}

}
