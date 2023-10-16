import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable()
export class SearchService {
  products = signal([] as any);

  constructor(private httpClient: HttpClient) {}

  getProducts(filter: any) {
    this.httpClient.get('/assets/mocks/search.json').subscribe({
      next: (p) => {
        this.products.set(p);
      },
    }); // real api should use filters
  }
}
