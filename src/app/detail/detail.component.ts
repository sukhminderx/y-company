import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MdbCarouselModule,
    MatPaginatorModule,
    NgOptimizedImage,
    NgFor,
  ],
})
export class DetailComponent implements OnInit {
  product: any = {};
  stars: Array<number> = [];
  unStars: Array<number> = [];
  constructor(
    private metaService: Meta,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ product }) => {
      this.product = product;
      this.stars = Array.from(Array(product.stars).keys());
      this.unStars = Array.from(Array(5 - product.stars).keys());
      this.metaService.updateTag({
        property: 'description',
        content: 'Y company - Product detail Page', // TODO
      });
    });
  }
}
