import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-ord-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './ord-menu-item.component.html',
  styleUrl: './ord-menu-item.component.scss'
})
export class OrdMenuItemComponent {

  @ViewChild('foodItems', {static : false, read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;

  constructor(private resolver: ComponentFactoryResolver) { }
  
  addMenuItem() {
    let childComponent = this.resolver.resolveComponentFactory(MenuItemComponent);
    this.componentRef = this.target?.createComponent(childComponent);
  }
}
