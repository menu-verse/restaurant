import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() key: number | undefined;
  @Output() dataSent = new EventEmitter<any>();

  name: string;
  price: string;

  constructor() {
    this.name = '';
    this.price = '';
  }

  saveComponentData() {
    this.dataSent.emit({
      name: this.name,
      price: this.price,
    });
  }

  deleteComponent() {}
}
