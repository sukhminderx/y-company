/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
*/
import { Routes } from '@angular/router';
import { HomeOffersResolver } from './configs/resolves/offers';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
    title: 'Y Company - One stop for latest fashion for youth',
    resolve: {
      offers: HomeOffersResolver,
    },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
    title: 'Y Company - Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(
        (mod) => mod.RegisterComponent
      ),
    title: 'Y Company - Register',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search.component').then((mod) => mod.SearchComponent),
    title: 'Y Company - Searching latest fashion products', // need resolve
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./detail/detail.component').then((mod) => mod.DetailComponent),
    title: 'Y Company - Product detail', // need resolve
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((mod) => mod.CartComponent),
    title: 'Y Company - your cart is ready',
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./payment/payment.component').then((mod) => mod.PaymentComponent),
    title: 'Y Company - payment',
  },
  {
    path: 'paid',
    loadComponent: () =>
      import('./paid/paid.component').then((mod) => mod.PaidComponent),
    title: 'Y Company - order summary',
  },
];
