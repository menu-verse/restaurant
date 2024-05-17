import { Component } from '@angular/core';
import { LogInComponent } from '../../components/log-in/log-in.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ LogInComponent ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
