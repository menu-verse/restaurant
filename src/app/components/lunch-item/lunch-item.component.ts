import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [MenuItemComponent, CommonModule, FormsModule],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.scss'
})
export class LunchItemComponent {

  @Input() week: string | undefined;
  @Output() saveMenu = new EventEmitter();

  items: any = [];
  isClosed: boolean = false;
  openingTime: string;
  closingTime: string;
  lunchTime: string;

  @ViewChild('menuItems', {static : false, read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;

  components: any[];

  constructor(private resolver: ComponentFactoryResolver) {
    this.components = [];
    this.openingTime = '';
    this.closingTime = '';
    this.lunchTime = '';
  }

  handleAddItem() {
    let childComponent = this.resolver.resolveComponentFactory(MenuItemComponent);
    const component = this.target?.createComponent(childComponent, this.components.length);
    

    if(component) {
      component.instance.key = this.components.length > 0 ? ( this.components[this.components.length - 1].instance.key + 1 ): 0;
    }
    this.components.push(component);
  }

  saveDay() {

    this.saveMenu.emit('SUJITH');
    
  }

  handleClosed() {
    
  }

}
