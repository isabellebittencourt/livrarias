import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListBookComponent } from './views/book/list-book/list-book.component';
import { EditBookComponent } from './views/book/edit-book/edit-book.component';
import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { ListCartComponent } from './views/cart/list-cart/list-cart.component';
import { PurchaseComponent } from './views/cart/purchase/purchase.component';

import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    ListUserComponent,
    CreateUserComponent,
    EditBookComponent,
    EditUserComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ListCartComponent,
    PurchaseComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
