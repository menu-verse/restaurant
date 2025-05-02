import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http-service.service';

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if(password?.value !== confirmPassword?.value) {
    control.get('confirmPassword')?.setErrors({invalid: true});
  }
  return null;
};

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  inProgress: boolean;

  constructor(private httpService: HttpService, private router: Router) {
    this.inProgress = false;
    this.signUpForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('')
    }, {
      validators: passwordMatchingValidatior 
    });
  }

  handleSignUp() {
    this.inProgress = true;
    this
        .httpService
        .post("account/create", this.signUpForm.value)
        .subscribe(data => {
          if( data?.sessionId ) {
            this.setCookie('session-id', data.sessionId, 365);
            this.router.navigate(['dashboard'])
          } else {
            console.log('Error while trying to create user');
          }
        })
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let date:Date = new Date();
        date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${date.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  get isValidForm() {
    return this.signUpForm.valid;
  }

  get fullName() {
    return this.signUpForm.get('fullName');
  }

  get email() {    
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  
}
