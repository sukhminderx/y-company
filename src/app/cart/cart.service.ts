import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable()
export class CartService {
  cart = signal([] as any);

  constructor(private httpClient: HttpClient) {}

  getCart() {
    this.httpClient.get('/assets/mocks/cart.json').subscribe({
      next: (p) => {
        this.cart.set(p);
      },
    });
  }
}
