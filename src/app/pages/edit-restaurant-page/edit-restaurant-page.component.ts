import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { CreateRestaurantComponent } from '../../components/create-restaurant/create-restaurant.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-edit-restaurant-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CreateRestaurantComponent,
    NgIf,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit-restaurant-page.component.html',
  styleUrl: './edit-restaurant-page.component.scss',
})
export class EditRestaurantPageComponent implements OnInit {
  loading: boolean = true;
  restaurantData: any = {};
  resID: string = '';

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.resID = params.get('id')!;
      this.httpService
        .get('restaurant/' + this.resID)
        .subscribe((data: any) => {
          this.loading = false;
          const {
            ownerEmail,
            menu,
            openingHours,
            ordinaryMenu,
            weekMenu,
            ...modifiedData
          } = data;
          this.restaurantData = { ...modifiedData, lunch: true, dining: true };
        });
    });
  }
}
