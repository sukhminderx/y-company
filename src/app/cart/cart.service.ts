import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ICart } from '../configs/interfaces/interfaces';

@Injectable()
export class CartService {
  cart = signal<ICart[]>([]);

  constructor(private httpClient: HttpClient) {}

  getCart() {
    this.httpClient.get('/assets/mocks/cart.json').subscribe({
      next: (p: Object) => {
        this.cart.set(p as ICart[]);
      },
    });
  }
}
