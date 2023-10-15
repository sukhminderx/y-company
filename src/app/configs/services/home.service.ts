import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getHomeOffers() {
    return this.httpClient.get('/assets/mocks/offers.json');
  }

  getFeaturedProducts() {
    return this.httpClient.get('/assets/mocks/featured.json');
  }
}
