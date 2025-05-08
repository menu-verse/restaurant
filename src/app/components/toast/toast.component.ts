import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() message: string = '';
  @Input() duration: number = 3000;
  @Input() callback?: () => void;

  visible = false;

  ngOnInit() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
      if (this.callback) {
        this.callback();
      }
    }, this.duration);
  }
}
