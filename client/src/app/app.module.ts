import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './views/book/list-book/list-book.component';
import { EditBookComponent } from './views/book/edit-book/edit-book.component';
import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    ListUserComponent,
    CreateUserComponent,
    EditBookComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
