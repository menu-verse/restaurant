import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http-service.service';
import { OrdMenuItemComponent } from '../ord-menu-item/ord-menu-item.component';

@Component({
  selector: 'app-create-ord-menu',
  standalone: true,
  imports: [],
  templateUrl: './create-ord-menu.component.html',
  styleUrl: './create-ord-menu.component.scss',
})
export class CreateOrdMenuComponent {
  components: any = [];
  lunchItems: any = [];

  @ViewChild('menuItems', { static: false, read: ViewContainerRef }) target:
    | ViewContainerRef
    | undefined;
  private componentRef: ComponentRef<any> | undefined;

  constructor(
    private resolver: ComponentFactoryResolver,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  addNewComponent() {
    let childComponent =
      this.resolver.resolveComponentFactory(OrdMenuItemComponent);

    const component = this.target?.createComponent(childComponent);
    if (component) {
      component.instance.key =
        this.components.length > 0
          ? this.components[this.components.length - 1].instance.key + 1
          : 0;
      component.instance.foodDataSent.subscribe((menuData: any) => {
        const { key } = component.instance;

        const index = this.lunchItems.findIndex(
          (item: any) => item.key === key
        );

        if (index > -1) {
          this.lunchItems[index] = { key: key, ...menuData };
        } else {
          this.lunchItems.push({ key: key, ...menuData });
        }
      });
      this.components.push(component);
    }
  }

  saveOrdinaryMenu() {
    const resID = this.activeRoute.snapshot.queryParamMap.get('restaurant');
    this.httpService
      .post(`restaurant/ord-menu?resID=${resID}`, this.lunchItems)
      .subscribe(() => {});
  }
}
