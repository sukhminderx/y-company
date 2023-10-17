import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/** DEPRECATED */
@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) {}
  getProducts(search: string, title: string) {
    return this.httpClient.get(
      title === 'Search results'
        ? '/assets/mocks/search.json'
        : '/assets/mocks/offeredSearch.json'
    );
  }
}
