import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-res',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-res.component.html',
  styleUrl: './list-res.component.scss',
})
export class ListResComponent {
  @Input() restaurants: any = [];
}
