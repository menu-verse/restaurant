import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.scss'
})
export class CreateRestaurantComponent {

  constructor(private router: Router) {

  }

  navigateToLunch() {
    this.router.navigate(['lunch']);
  }

}
