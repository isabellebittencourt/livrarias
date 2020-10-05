import { UserService } from './../../../services/user.service';
import { userSchema } from './../../../models/userSchema';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  usuarios : userSchema[] = [];

  constructor(private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.list().subscribe((lista) =>{
      this.usuarios = lista;  
      console.log(this.usuarios);
      });
    }
  

}
