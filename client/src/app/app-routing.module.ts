import { CreateUsersComponent } from './views/user/create-users/create-users.component';
import { ListUsersComponent } from './views/user/list-users/list-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBooksComponent} from './views/book/create-books/create-books.component';
import { ListBooksComponent } from './views/book/list-books/list-books.component';

const routes: Routes = [
  {
    path: '', 
    component: ListBooksComponent
  },
  {
    path: 'book/create',
    component: CreateBooksComponent
  },
  {
    path: 'user/list',
    component: ListUsersComponent
  },
  {
    path: 'user/create',
    component: CreateUsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
