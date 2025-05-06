import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent implements OnChanges {
  @Input() key: number | undefined;
  @Input() data: any;
  @Output() dataSent = new EventEmitter<any>();

  name: string;
  price: string;

  constructor() {
    this.name = '';
    this.price = '';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      const { currentValue } = changes['data'];
      this.name = currentValue.name;
      this.price = currentValue.price;
    }
  }

  saveComponentData() {
    this.dataSent.emit({
      name: this.name,
      price: this.price,
    });
  }

  deleteComponent() {}
}
