import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  loginForm: FormGroup;

  constructor(private http: HttpService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8)]),
    });
  }

  private setLocalStorage(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  handleLogin() {
    this.http.post('account/login', this.loginForm.value).subscribe((data) => {
      if (data?.sessionId) {
        this.setLocalStorage('session-id', data.sessionId);
        this.router.navigate(['dashboard']);
      } else {
        console.log('Error while trying to create user');
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
