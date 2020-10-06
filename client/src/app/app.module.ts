import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './views/book/list-book/list-book.component';
import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    ListUserComponent,
    CreateUserComponent
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
