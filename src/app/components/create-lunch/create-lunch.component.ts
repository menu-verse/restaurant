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
  resID = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.lunchMenu = [];
    this.resID =
      this.activeRoute.snapshot.queryParamMap.get('restaurant') || '';
  }

  handleSaveMenu(data: any) {
    this.httpService
      .post(`restaurant/week-menu?resID=${this.resID}`, data)
      .subscribe(() => {});
  }

  navigateToOrdinary() {
    this.router.navigate(['ordinary-menu'], {
      queryParams: {
        restaurant: this.resID,
      },
    });
  }

  navigateToRestaurant() {
    this.router.navigate(['create']);
  }
}
