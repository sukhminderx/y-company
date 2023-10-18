import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const canAccess = () => {
  const router: Router = inject(Router);
  let jwtToken = '';
  if (typeof localStorage !== 'undefined') {
    jwtToken = JSON.parse(localStorage.getItem('user') || '{}')?.token;
  }

  if (jwtToken) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
