import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { EmptyResComponent } from '../../components/empty-res/empty-res.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [HeaderComponent, EmptyResComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
