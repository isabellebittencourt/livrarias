import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  user:user={
    nome:"",
    cpf : "",
    email: "",
    dataNascimento: new Date()
}

  constructor(private route:ActivatedRoute, private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.user._id = this.route.snapshot.paramMap.get('id');

    this.service.getUser(this.user._id).subscribe(returnedUser => {
      this.user = returnedUser;
    });
  }

  editUser() : void{
      this.service.updateUser(this.user).subscribe(() =>{
        this.router.navigate(['user/list']);
      })
  }

}
