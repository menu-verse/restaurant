import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAuthenticated() {
    const userLoggedIn = !!localStorage.getItem('session-id');
    return userLoggedIn;
  }
}
