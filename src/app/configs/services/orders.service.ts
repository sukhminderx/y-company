import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  getOrders() {
    return this.httpClient.get('/assets/mocks/orders.json');
  }
}
