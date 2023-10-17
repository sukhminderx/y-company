import { Component, Injectable, OnInit, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { Meta } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { CommonModule } from '@angular/common';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FiltersComponent,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ProductsComponent,
    MatIconModule,
    MatPaginatorModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class SearchComponent implements OnInit {
  products: any = [];
  title = 'Products';
  showSpinner = false;
  constructor(
    private metaService: Meta,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content: 'Y company - Product Search Page',
    });
    this.activatedRoute.queryParams.subscribe(({ title }) => {
      this.title = title;
    });
    this.searchService.products$.subscribe({
      next: (p: any) => {
        this.products = p;
        this.showSpinner = false;
      },
    });
  }

  callFilter(form: any) {
    this.showSpinner = true;
    this.searchService.getProducts(form);
  }
}
