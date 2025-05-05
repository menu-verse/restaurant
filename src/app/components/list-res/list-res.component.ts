import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-res',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list-res.component.html',
  styleUrl: './list-res.component.scss',
})
export class ListResComponent {
  @Input() restaurants: any = [];
}
