import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) {}
  getProducts(search: string) {
    return this.httpClient.get('/assets/mocks/search.json');
  }
}
