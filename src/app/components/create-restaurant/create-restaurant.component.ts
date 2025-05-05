import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-create-restaurant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.scss',
})
export class CreateRestaurantComponent implements OnChanges {
  @Input() title: string = '';
  @Input() data: any;

  restaurantFormGroup: FormGroup;

  constructor(private router: Router, private httpService: HttpService) {
    const addressFormGroup = new FormGroup({
      addressLineOne: new FormControl('', [Validators.required]),
      addressLineTwo: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      lat: new FormControl(''),
      lon: new FormControl(''),
    });

    this.restaurantFormGroup = new FormGroup({
      logo: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      cover: new FormControl('', [Validators.required]),
      address: addressFormGroup,

      phoneNumber: new FormControl('', [Validators.required]),

      lunch: new FormControl('', [Validators.required]),
      dining: new FormControl('', [Validators.required]),
      foodGenre: new FormControl('', [Validators.required]),

      id: new FormControl(''),
      url: new FormControl(''),
    });
  }

  getID(name: string) {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.restaurantFormGroup.setValue(changes['data'].currentValue);
    }
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      console.log(this.restaurantFormGroup.get('address')?.value);
      this.restaurantFormGroup.get('address')?.patchValue({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      console.log(this.restaurantFormGroup.get('address')?.value);
    });
  }

  updateID() {
    const { name } = this.restaurantFormGroup.value;
    const id = this.getID(name);
    this.restaurantFormGroup.patchValue({
      id,
      url: id,
    });
  }

  navigateToLunch() {
    this.httpService
      .post('restaurant/add', this.restaurantFormGroup.value)
      .subscribe((data: any) => {
        this.router.navigate(['lunch'], {
          queryParams: {
            restaurant: data.url,
          },
        });
      });
  }
}
