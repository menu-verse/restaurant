import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LunchItemComponent } from '../lunch-item/lunch-item.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-lunch',
  standalone: true,
  imports: [MatTabsModule, LunchItemComponent],
  templateUrl: './create-lunch.component.html',
  styleUrl: './create-lunch.component.scss'
})
export class CreateLunchComponent {

  lunchMenu: any[];

  constructor(private router: Router) {

    this.lunchMenu = [];

  }

  handleSaveMenu(data: string) {
    console.log('CREATE LUNCH COMPONENT SAVE ' + data);
    
  }

  navigateToOrdinary() {
    this.router.navigate(['ordinary-menu']);
  }

  navigateToRestaurant() {
    this.router.navigate(['create'])
  }

}
