import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { OrdMenuItemComponent } from '../ord-menu-item/ord-menu-item.component';

@Component({
  selector: 'app-create-ord-menu',
  standalone: true,
  imports: [],
  templateUrl: './create-ord-menu.component.html',
  styleUrl: './create-ord-menu.component.scss'
})
export class CreateOrdMenuComponent {


  @ViewChild('menuItems', {static : false, read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;

  constructor(private resolver: ComponentFactoryResolver) { }
  
  addNewComponent() {
    let childComponent = this.resolver.resolveComponentFactory(OrdMenuItemComponent);
    this.componentRef = this.target?.createComponent(childComponent);
  }
}
