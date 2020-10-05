import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListBooksComponent } from './views/book/list-books/list-books.component';
import { CreateBooksComponent } from './views/book/create-books/create-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    CreateBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
