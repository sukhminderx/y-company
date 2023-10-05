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
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
*/
