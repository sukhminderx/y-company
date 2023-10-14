import { Component, OnInit } from '@angular/core';
import { OffersComponent } from './offers/offers.component';
import { LatestComponent } from './latest/latest.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [OffersComponent, LatestComponent],
})
export class HomeComponent implements OnInit {
  constructor(private metaService: Meta) {}

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content:
        'Y company - Get our Low Price Guarantee, online or in store, on a huge selection of furniture, fitness, travel, baby products and more!',
    });
  }
}
