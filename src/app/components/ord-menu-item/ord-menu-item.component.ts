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
  selector: 'app-ord-menu-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ord-menu-item.component.html',
  styleUrl: './ord-menu-item.component.scss',
})
export class OrdMenuItemComponent implements OnChanges {
  type = '';
  components: any = [];
  lunchItems: any = [];

  @Input() data: any;
  @Input() key: number | undefined;
  @Output() foodDataSent = new EventEmitter<any>();

  @ViewChild('foodItems', { static: true, read: ViewContainerRef }) target:
    | ViewContainerRef
    | undefined;
  private componentRef: ComponentRef<any> | undefined;

  constructor(private resolver: ComponentFactoryResolver) {
    this.type = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.type = changes['data'].currentValue.type;
      this.lunchItems = changes['data'].currentValue.items.map(
        (item: any, index: any) => {
          return {
            ...item,
            key: index,
          };
        }
      );
      for (let item of changes['data'].currentValue.items) {
        this.addMenuItem(item);
      }
    }
  }

  addMenuItem(data?: any) {
    let childComponent =
      this.resolver.resolveComponentFactory(MenuItemComponent);

    const component = this.target?.createComponent(childComponent);

    if (component) {
      component.instance.key =
        this.components.length > 0
          ? this.components[this.components.length - 1].instance.key + 1
          : 0;
      console.log(data, component.instance.key);
      if (data) {
        component.setInput('data', data);
      }
      component.instance.dataSent.subscribe((menuData: any) => {
        const { key } = component.instance;

        const index = this.lunchItems.findIndex(
          (item: any) => item.key === key
        );

        if (index > -1) {
          this.lunchItems[index] = { key: key, ...menuData };
        } else {
          this.lunchItems.push({ key: key, ...menuData });
        }

        this.sendFullData();
      });
      this.components.push(component);
    }
  }
  sendFullData() {
    this.foodDataSent.emit({
      type: this.type,
      items: this.lunchItems,
    });
  }
  onFoodTypeChange() {
    this.sendFullData();
  }
}
