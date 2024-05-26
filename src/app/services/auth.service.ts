import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  constructor() { }
}
