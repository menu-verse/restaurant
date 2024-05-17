import { Component } from '@angular/core';
import { CreateRestaurantComponent } from '../../components/create-restaurant/create-restaurant.component';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [ CreateRestaurantComponent ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {

}
