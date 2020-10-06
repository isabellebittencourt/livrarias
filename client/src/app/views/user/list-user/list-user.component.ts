import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  usuario : user[] = []; 
  constructor(private router:Router,private userService : UserService) { }

  ngOnInit(): void {
    this.userService.listUsers( ).subscribe((usuarios ) => {
      console.log(usuarios);
     this.usuario = usuarios;
  });
  }

  navigateToCreateUser(): void {
    this.router.navigate(['user/create']);
    
  }

}
