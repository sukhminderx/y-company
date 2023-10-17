import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { SearchService } from '../services/search.service';

/** DEPRECATED */
export const SearchResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SearchService).getProducts(
    route.queryParams['search'],
    route.queryParams['title']
  );
};
