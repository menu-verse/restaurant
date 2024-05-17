import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [MenuItemComponent, CommonModule, FormsModule],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.scss'
})
export class LunchItemComponent {

  items: any = [];
  isClosed: boolean = false;

  constructor() {

  }

  handleAddItem() {
    const length = this.items.length;
    this.items.push('' + length);
  }

  handleClosed() {
    
  }

}
