import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
    
  }

  isAuthenticated() {
      const cookie:string = document.cookie;
      const cookiesList = cookie.split(';');
      let userLoggedIn = false;
      
      cookiesList.filter( cookie => {
        if(cookie.indexOf('session-id') > -1) {
          userLoggedIn = true;
          return;
        }
      } )
      return userLoggedIn;
  }

}
