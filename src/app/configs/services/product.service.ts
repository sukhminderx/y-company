import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProduct(id: string) {
    return { id };
  }
}
