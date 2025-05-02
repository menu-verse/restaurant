import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [MenuItemComponent, CommonModule, FormsModule],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.scss',
})
export class LunchItemComponent {
  @Input() week: string | undefined;
  @Output() saveMenu = new EventEmitter();

  items: any = [];
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

  handleAddItem() {
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
        console.log(this.lunchItems);
      });
      this.components.push(component);
    }
  }

  saveDay() {
    this.saveMenu.emit('SUJITH');
  }

  handleClosed() {}
}
