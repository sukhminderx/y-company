/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
*/
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(
        (mod) => mod.RegisterComponent
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search.component').then((mod) => mod.SearchComponent),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./detail/detail.component').then((mod) => mod.DetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((mod) => mod.CartComponent),
  },
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
*/
