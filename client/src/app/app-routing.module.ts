import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { ListBookComponent } from './views/book/list-book/list-book.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';

const routes: Routes = [{
  path:'',
  component:ListBookComponent
},

{
  path:'book/create',
  component:CreateBookComponent
},
{
  path:'book/create/:id',
  component:CreateBookComponent
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
  path: 'user/create/:id',
  component: CreateUserComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
