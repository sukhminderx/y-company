import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
  products$: any = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {}

  getProducts(filter: any) {
    this.httpClient.get('/assets/mocks/search.json').subscribe({
      next: (p: any) => {
        setTimeout(() => {
          this.products$.next([...p]);
        }, 1000);
      },
    }); // real api should use filters
  }
}
