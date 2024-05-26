import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  loginForm: FormGroup;

  constructor(private http: HttpService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.minLength(8)
      ]),
    });
  }
  
  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let date:Date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${date.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  handleLogin() {
    this.
      http.
      post('account/login', this.loginForm.value).
      subscribe( data => {
        if( data?.sessionId ) {
          this.setCookie('session-id', data.sessionId, 365);
          this.router.navigate(['dashboard'])
        } else {
          console.log('Error while trying to create user');
        }
      } )
  }

  get email() {    
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
