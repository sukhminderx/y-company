import { Component, Input } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, NgFor],
})
export class LatestComponent {
  @Input() featuredProducts: any = [];

  constructor(private router: Router) {}

  goTo(item: any) {
    this.router.navigate(['/detail', item.id]);
  }
}
