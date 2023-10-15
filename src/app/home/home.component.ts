import { Component, OnInit } from '@angular/core';
import { OffersComponent } from './offers/offers.component';
import { LatestComponent } from './latest/latest.component';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [OffersComponent, LatestComponent],
})
export class HomeComponent implements OnInit {
  offers = {};
  featuredProducts = [];
  constructor(
    private metaService: Meta,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content:
        'Y company - Get our Low Price Guarantee, online or in store, on a huge selection of furniture, fitness, travel, baby products and more!',
    });

    this.activatedRoute.data.subscribe(({ offers, featuredProducts }) => {
      this.offers = offers;
      this.featuredProducts = featuredProducts;
    });
  }
}
