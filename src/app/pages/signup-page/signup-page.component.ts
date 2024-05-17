import { Component } from '@angular/core';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [SignUpComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

}
