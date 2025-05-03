import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmptyResComponent } from '../../components/empty-res/empty-res.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ListResComponent } from '../../components/list-res/list-res.component';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    HeaderComponent,
    EmptyResComponent,
    ListResComponent,
    NgIf,
    MatProgressSpinnerModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
  restaurants: any = [];
  center: boolean = true;
  loading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.get('restaurant/all').subscribe((data: any) => {
      this.loading = false;
      this.restaurants = data;
      if (this.restaurants.length > 0) {
        this.center = false;
      }
    });
  }
}
