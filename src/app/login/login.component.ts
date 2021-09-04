import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  errorMessage:string;
  constructor(private router : Router,
    private harcodedAuthService : HardcodedAuthenticationService) { 
    this.username = "soumya1";
    this.password = "abc";
    this.errorMessage = "";
  }

  ngOnInit(): void {
    this.harcodedAuthService.logout();
  }

  handleLogin(){

    if(this.harcodedAuthService.authenticate(this.username,this.password)){
      this.errorMessage = "";
      this.router.navigate(['welcome',this.username]);
    }else{
      this.errorMessage = "Invalid credentials";
    }
  }

}
