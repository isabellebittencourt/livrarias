import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { EditBookComponent } from './views/book/edit-book/edit-book.component';
import { ListBookComponent } from './views/book/list-book/list-book.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { ListCartComponent } from './views/cart/list-cart/list-cart.component';

const routes: Routes = [{
    path:'',
    component:ListBookComponent
  },

  {
    path:'book/create',
    component:CreateBookComponent
  },
  {
    path:'book/edit/:id',
    component:EditBookComponent
  },
  {
    path: 'user/list',
    component: ListUserComponent
  },
  {
    path: 'user/create',
    component: CreateUserComponent
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'cart/list',
    component: ListCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
