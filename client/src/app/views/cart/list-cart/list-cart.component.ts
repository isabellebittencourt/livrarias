import { book } from './../../../models/book';
import { ShoppingCartService } from './../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})

export class ListCartComponent implements OnInit {

  constructor(private cartService : ShoppingCartService) { }


  cartColumns : string[] = ['titulo', 'autor','preco', 'quantidade', 'remover'];

  ngOnInit(): void {
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }
  }
  
  items(): book[] {
    return this.cartService.items;
  }
  
  removeBook(book){
    let c = this.cartService
    return c.removeBook(book); 
}
}
