import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigationToUsers() : void{
    this.router.navigate(['user/list'])
  }

  navigationToHome() : void{
    this.router.navigate(['/'])
  }
  navigationToCart() : void{
    this.router.navigate(['cart/list'])
  }
  navigationToCategories() : void {
    this.router.navigate(['category/list'])
  }

}
