import { Component } from '@angular/core';
import { CreateRestaurantComponent } from '../../components/create-restaurant/create-restaurant.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [ CreateRestaurantComponent, HeaderComponent ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {

}
