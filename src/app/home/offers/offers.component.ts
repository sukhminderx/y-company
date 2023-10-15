import { Component, Input } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, NgFor],
})
export class OffersComponent {
  @Input() offers: any = {};
}
