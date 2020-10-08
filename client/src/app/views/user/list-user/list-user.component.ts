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
  usuarios : user[] = []; 
  constructor(private router:Router,private userService : UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe((users) => {
     this.usuarios = users;
  });
  }

  navigateToCreateUser(): void {
    this.router.navigate(['user/create']);
  }

  deleteUser(userId : String) {
    const confirmation = confirm('Deseja mesmo deletar este usuário?');

    if(!confirmation) {
      return;
    }

    this.userService.deleteUser(userId).subscribe();

    window.location.reload();
  }

}
