import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage = "Campo invalido";
  user: User = {name: '', email: '', password: ''};

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(){
    return this.errorMessage;
  }

}
