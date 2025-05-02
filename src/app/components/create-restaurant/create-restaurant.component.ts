import { Component } from '@angular/core';
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
export class CreateRestaurantComponent {
  restaurantFormGroup: FormGroup;

  constructor(private router: Router, private httpService: HttpService) {
    const addressFormGroup = new FormGroup({
      addressLineOne: new FormControl('', [Validators.required]),
      addressLineTwo: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
    });

    this.restaurantFormGroup = new FormGroup({
      logo: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      cover: new FormControl('', [Validators.required]),
      address: addressFormGroup,
      latitude: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      phoneNumber: new FormControl('', [Validators.required]),
      longitude: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
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
