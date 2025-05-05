import { Routes } from '@angular/router';
import { CreateLunchPageComponent } from '../pages/create-lunch-page/create-lunch-page.component';
import { CreatePageComponent } from '../pages/create-page/create-page.component';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';
import { EditRestaurantPageComponent } from '../pages/edit-restaurant-page/edit-restaurant-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { OrdinaryMenuPageComponent } from '../pages/ordinary-menu-page/ordinary-menu-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { AuthGuard } from '../services/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'log-in',
    component: LoginPageComponent,
  },
  {
    path: 'sign-up',
    component: SignupPageComponent,
  },
  {
    path: 'create',
    component: CreatePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lunch',
    component: CreateLunchPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ordinary-menu',
    component: OrdinaryMenuPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'restaurant/:id',
    component: EditRestaurantPageComponent,
    canActivate: [AuthGuard],
  },
];
