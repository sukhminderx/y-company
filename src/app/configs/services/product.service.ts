import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProduct(id: string) {
    return this.httpClient.get('/assets/mocks/product.json');
  }
}
