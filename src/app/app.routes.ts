import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ProductsComponent } from '../components/products/products.component';

export const routes: Routes = [

    {path: '',component: HomeComponent},
    {path: 'login',component: LoginComponent}, 
    {path: 'signup',component: SignupComponent},
    {path: 'products',component: ProductsComponent},
    {path: 'NotFound',component: NotFoundComponent},
    {path: '**',component: NotFoundComponent ,pathMatch: 'full'} ,
];
