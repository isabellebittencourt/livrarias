import { book } from './../../../models/book';
import { Router } from '@angular/router';
import { purchase } from './../../../models/purchase';
import { ShoppingCartService } from './../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})

export class ListCartComponent implements OnInit {

  constructor(private cartService : ShoppingCartService, private purchaseService: PurchaseService, private router:Router) { }


  cartColumns : string[] = ['titulo', 'autor','preco', 'remover'];

  items: book[];

  purchase: purchase;

  ngOnInit(): void {
    let cartSession = sessionStorage.getItem("cart");

    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }

    const purchase = this.getPurchase();

    this.purchase = purchase;
    
    this.items = this.cartService.items;
  }

  getPurchase(): purchase {
    const total = this.cartService.items.map(b => b.preco).reduce((a, b) => a + b, 0);

    const purchase = {
      usuario: null,
      itens: this.cartService.items,
      total
    }

    return purchase;
  }
  
  removeBook(book){
    let c = this.cartService
    return c.removeBook(book); 
}

  finishPurchase() {
    this.purchaseService.create(this.purchase).subscribe(purchase =>{
      this.router.navigate([`cart/purchase/${purchase._id}`])
    }) 
  }
}
