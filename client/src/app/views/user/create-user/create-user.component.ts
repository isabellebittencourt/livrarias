import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

user:user={
    nome:"",
    cpf : "",
    email: "",
    dataNascimento: new Date()
}

  constructor(private service : UserService, private router: Router) { }

  ngOnInit(): void {
  }
  createUser() : void{
   this.service.createUser(this.user).subscribe(() =>{
    this.router.navigate(['user/list']);
   })
  }

}
