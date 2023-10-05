import { Component } from '@angular/core';
import { OffersComponent } from './offers/offers.component';
import { LatestComponent } from './latest/latest.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [OffersComponent, LatestComponent],
})
export class HomeComponent {}
