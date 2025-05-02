import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http-service.service';
import { LunchItemComponent } from '../lunch-item/lunch-item.component';

@Component({
  selector: 'app-create-lunch',
  standalone: true,
  imports: [MatTabsModule, LunchItemComponent],
  templateUrl: './create-lunch.component.html',
  styleUrl: './create-lunch.component.scss',
})
export class CreateLunchComponent {
  lunchMenu: any[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.lunchMenu = [];
  }

  handleSaveMenu(data: any) {
    const resID = this.activeRoute.snapshot.queryParamMap.get('restaurant');
    this.httpService
      .post(`restaurant/week-menu?resID=${resID}`, data)
      .subscribe(console.log);
    console.log(data, resID);
  }

  navigateToOrdinary() {
    this.router.navigate(['ordinary-menu']);
  }

  navigateToRestaurant() {
    this.router.navigate(['create']);
  }
}
