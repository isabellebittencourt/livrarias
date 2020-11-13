import { Router, ActivatedRoute } from '@angular/router';
import { purchase } from './../../../models/purchase';
import { PurchaseService } from './../../../services/purchase.service';
import { ShoppingCartService } from './../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {

  constructor(private route:ActivatedRoute, private purchaseService : PurchaseService, private router:Router, private cartService : ShoppingCartService) { }

  purchase: purchase = {
    usuario: null,
    itens: null,
    total: null
  }

  ngOnInit(): void {
    const purchaseId = this.route.snapshot.paramMap.get('id');

    if(!purchaseId) {
      return this.navigationToIndex();
    }

    const purchase = this.purchaseService.get(purchaseId).subscribe(purchase => {
      this.purchase = purchase;
    });

    if(!purchase) {
      return this.navigationToIndex();
    }

    this.cartService.clear();
  }

  navigationToIndex() {
    this.router.navigate(['/']);
  }
}
