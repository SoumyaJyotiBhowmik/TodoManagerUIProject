import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    console.log("before"+this.isUserLoggedIn());
    if(username === "soumya" && password === "abc"){
      sessionStorage.setItem("authenticateUser",username);
      //console.log("After"+this.isUserLoggedIn());
     return true;
     }
     return false;
    }
    isUserLoggedIn(){
     
      let val = sessionStorage.getItem('authenticateUser');
      //console.log("isUserLoggedIn",val);
      return val != null;
    }
    logout(){
      sessionStorage.removeItem('authenticateUser');
    }
}
