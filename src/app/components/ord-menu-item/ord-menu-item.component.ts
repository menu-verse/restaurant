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
  selector: 'app-ord-menu-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ord-menu-item.component.html',
  styleUrl: './ord-menu-item.component.scss',
})
export class OrdMenuItemComponent {
  type = '';
  components: any = [];
  lunchItems: any = [];

  @Input() key: number | undefined;
  @Output() foodDataSent = new EventEmitter<any>();

  @ViewChild('foodItems', { static: false, read: ViewContainerRef }) target:
    | ViewContainerRef
    | undefined;
  private componentRef: ComponentRef<any> | undefined;

  constructor(private resolver: ComponentFactoryResolver) {}

  addMenuItem() {
    let childComponent =
      this.resolver.resolveComponentFactory(MenuItemComponent);
    const component = this.target?.createComponent(childComponent);
    if (component) {
      component.instance.key =
        this.components.length > 0
          ? this.components[this.components.length - 1].instance.key + 1
          : 0;
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
        this.components.push(component);
        this.sendFullData();
      });
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
