import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.scss'
})
export class CreateRestaurantComponent {

  restaurantFormGroup: FormGroup;

  constructor(private router: Router) {
    this.restaurantFormGroup = new FormGroup({
      logo: new FormControl('',[
        Validators.required
      ]),
      resName: new FormControl('',[
        Validators.required
      ]),
      cover: new FormControl('',[
        Validators.required
      ]),
      address: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
      latitude: new FormControl({value: '', disabled: true}, [
        Validators.required
      ]),
      phoneNumber: new FormControl('',[
        Validators.required
      ]),
      longitude: new FormControl({value: '', disabled: true}, [
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      lunch: new FormControl('',[
        Validators.required
      ]),
      dining: new FormControl('',[
        Validators.required
      ]),
      foodGenre: new FormControl('',[
        Validators.required
      ])
    });
  }

  navigateToLunch() {
    console.log(this.restaurantFormGroup.value);
    const { valid } = this.restaurantFormGroup;
    if(valid) {
      this.router.navigate(['lunch'])
    }
  }

}
