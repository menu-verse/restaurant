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

  constructor(private router: Router) {

  }

  navigateToOrdinary() {
    this.router.navigate(['ordinary-menu']);
  }

}
