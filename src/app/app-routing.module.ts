/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
*/
import { Routes } from '@angular/router';
import { HomeOffersResolver } from './configs/resolves/offers';
import { FeaturedProductsResolver } from './configs/resolves/featured-products';
import { ProductResolver } from './configs/resolves/product';
import { SearchResolver } from './configs/resolves/search';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
    title: 'Y Company - One stop for latest fashion for youth',
    resolve: {
      offers: HomeOffersResolver,
      featuredProducts: FeaturedProductsResolver,
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
    title: 'Y Company - Searching latest fashion products',
    resolve: {
      products: SearchResolver,
    },
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((mod) => mod.DetailComponent),
    title: 'Y Company - Product detail',
    resolve: {
      product: ProductResolver,
    },
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
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];
