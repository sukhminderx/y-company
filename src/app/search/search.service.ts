import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
  products$: any = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {}

  getProducts(filter: any, title: string) {
    this.httpClient
      .get(
        title === 'Search results'
          ? '/assets/mocks/search.json'
          : '/assets/mocks/offeredSearch.json'
      )
      .subscribe({
        next: (p: any) => {
          setTimeout(() => {
            this.products$.next([...p]);
          }, 1000);
        },
      }); // real api should use filters
  }
}
