import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [MatButtonModule, NgFor],
})
export class OffersComponent {
  @Input() offers: any = {};
  constructor(private router: Router) {}

  goto() {
    this.router.navigate(['/search'], {
      queryParams: {
        search: 'offers',
        title: 'Latest offers',
      },
    });
  }
}
