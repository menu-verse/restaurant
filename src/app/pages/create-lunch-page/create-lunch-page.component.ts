import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLunchComponent } from '../../components/create-lunch/create-lunch.component';

import { MatSelectModule, MatOption } from '@angular/material/select';

@Component({
  selector: 'app-create-lunch-page',
  standalone: true,
  imports: [CreateLunchComponent, MatSelectModule, MatOption, CommonModule],
  templateUrl: './create-lunch-page.component.html',
  styleUrl: './create-lunch-page.component.scss'
})
export class CreateLunchPageComponent {

  weeks: any = [];

  constructor() {
    for(let i = 1; i <=53; ++i ) {
      this.weeks.push({
        label: 'Week ' + i,
        value: 'week1'
      })
    }
  }

}
