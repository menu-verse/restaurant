import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { CreatePageComponent } from '../pages/create-page/create-page.component';
import { CreateLunchPageComponent } from '../pages/create-lunch-page/create-lunch-page.component';
import { OrdinaryMenuPageComponent } from '../pages/ordinary-menu-page/ordinary-menu-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },{
        path: 'log-in',
        component: LoginPageComponent
    },{
        path: 'sign-up',
        component: SignupPageComponent
    },{
        path: 'create',
        component: CreatePageComponent
    },{
        path: 'lunch',
        component: CreateLunchPageComponent
    },{
        path: 'ordinary-menu',
        component: OrdinaryMenuPageComponent
    }
];
