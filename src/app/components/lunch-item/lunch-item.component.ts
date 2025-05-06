import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.scss',
})
export class LunchItemComponent implements OnChanges {
  @Input() week: string | undefined;
  @Input() data: any;
  @Output() saveMenu = new EventEmitter();

  lunchItems: any = [];
  isClosed: boolean = false;
  openingTime: string;
  closingTime: string;
  lunchTime: string;

  @ViewChild('menuItems', { static: false, read: ViewContainerRef }) target:
    | ViewContainerRef
    | undefined;
  private componentRef: ComponentRef<any> | undefined;

  components: any[];

  constructor(private resolver: ComponentFactoryResolver) {
    this.components = [];
    this.lunchItems = [];
    this.openingTime = '';
    this.closingTime = '';
    this.lunchTime = '';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      const { currentValue } = changes['data'];
      this.openingTime = currentValue.openingTime;
      this.closingTime = currentValue.closingTime;
      this.lunchTime = currentValue.lunchTime;
      this.isClosed = currentValue.closed;
      this.lunchItems = currentValue.items;
      for (let item of currentValue.items) {
        this.handleAddItem(item);
      }
    }
  }

  handleAddItem(item?: any) {
    let childComponent =
      this.resolver.resolveComponentFactory(MenuItemComponent);
    const component = this.target?.createComponent(
      childComponent,
      this.components.length
    );

    if (component) {
      component.instance.key =
        this.components.length > 0
          ? this.components[this.components.length - 1].instance.key + 1
          : 0;
      if (item) {
        component.setInput('data', item);
      }
      component.instance.dataSent.subscribe((data: any) => {
        const { key } = component.instance;

        const index = this.lunchItems.findIndex(
          (item: any) => item.key === key
        );

        if (index > -1) {
          this.lunchItems[index] = { key: key, ...data };
        } else {
          this.lunchItems.push({ key: key, ...data });
        }
      });
      this.components.push(component);
    }
  }

  saveDay() {
    this.saveMenu.emit({
      items: this.lunchItems,
      openingTime: this.openingTime,
      closingTime: this.closingTime,
      lunchTime: this.lunchTime,
      closed: this.isClosed,
      day: this.week,
    });
  }

  handleClosed() {}
}
