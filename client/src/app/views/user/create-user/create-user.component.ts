import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

user:user={
    name:"",
    cpf : "",
    email: "",
    dataNascimento: new Date()
}

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }
  createUser() : void{
   this.service.createUser(this.user).subscribe(() =>{
      console.log(user);
   })
  }

}
