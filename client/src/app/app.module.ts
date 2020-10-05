import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListBooksComponent } from './views/book/list-books/list-books.component';
import { CreateBooksComponent } from './views/book/create-books/create-books.component';
import { ListUsersComponent } from './views/user/list-users/list-users.component';
import { CreateUsersComponent } from './views/user/create-users/create-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    CreateBooksComponent,
    ListUsersComponent,
    CreateUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
