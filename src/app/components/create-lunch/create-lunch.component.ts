import { Component, OnInit } from '@angular/core';
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
export class CreateLunchComponent implements OnInit {
  lunchMenu: any[];
  resID = '';
  weekMenu: any = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.lunchMenu = [];
    this.resID =
      this.activeRoute.snapshot.queryParamMap.get('restaurant') || '';
  }
  ngOnInit(): void {
    this.httpService.get(`restaurant/${this.resID}`).subscribe((data: any) => {
      data.weekMenu.forEach((item: any) => {
        const key = item.day;
        this.weekMenu[key] = item;
      });
    });
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
