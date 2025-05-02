import { Component } from '@angular/core';
import { CreateOrdMenuComponent } from '../../components/create-ord-menu/create-ord-menu.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-ordinary-menu-page',
  standalone: true,
  imports: [CreateOrdMenuComponent, HeaderComponent],
  templateUrl: './ordinary-menu-page.component.html',
  styleUrl: './ordinary-menu-page.component.scss'
})
export class OrdinaryMenuPageComponent {

}
