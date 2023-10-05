import { Component } from '@angular/core';
import { OffersComponent } from './offers/offers.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [OffersComponent],
})
export class HomeComponent {}
