import { NgIf } from '@angular/common';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http-service.service';
import { OrdMenuItemComponent } from '../ord-menu-item/ord-menu-item.component';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-create-ord-menu',
  standalone: true,
  imports: [ToastComponent, NgIf],
  templateUrl: './create-ord-menu.component.html',
  styleUrl: './create-ord-menu.component.scss',
})
export class CreateOrdMenuComponent implements OnInit {
  components: any = [];
  lunchItems: any = [];
  resID: string = '';
  showToast: boolean = false;

  @ViewChild('menuItems', { static: false, read: ViewContainerRef }) target:
    | ViewContainerRef
    | undefined;
  private componentRef: ComponentRef<any> | undefined;

  constructor(
    private resolver: ComponentFactoryResolver,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {
    this.onToastClosed = this.onToastClosed.bind(this);
    this.resID =
      this.activeRoute.snapshot.queryParamMap.get('restaurant') || '';
  }

  ngOnInit(): void {
    this.httpService.get(`restaurant/${this.resID}`).subscribe((data: any) => {
      this.lunchItems = data.ordinaryMenu.map((item: any, index: any) => {
        return {
          ...item,
          key: index,
        };
      });

      for (let item of data.ordinaryMenu) {
        this.addNewComponent(item);
      }
    });
  }

  addNewComponent(data?: any) {
    let childComponent =
      this.resolver.resolveComponentFactory(OrdMenuItemComponent);

    const component = this.target?.createComponent(childComponent);
    if (component) {
      component.instance.key =
        this.components.length > 0
          ? this.components[this.components.length - 1].instance.key + 1
          : 0;
      if (data) {
        component.setInput('data', data);
      }
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

  onToastClosed() {
    this.showToast = false;
    this.router.navigate(['dashboard']);
  }

  saveOrdinaryMenu() {
    this.httpService
      .post(`restaurant/ord-menu?resID=${this.resID}`, this.lunchItems)
      .subscribe(() => {
        this.showToast = true;
      });
  }
}
