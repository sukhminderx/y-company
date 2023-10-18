import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  async login(details: any) {
    this.httpClient.get('/assets/mocks/login.json').subscribe({
      next: (user: any) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/payment']);
      },
    });
  }
}
