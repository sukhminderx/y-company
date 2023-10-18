import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class OrdersComponent implements OnInit {
  orders: any = {};
  constructor(
    private metaService: Meta,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content: 'Y company - Previous orders',
    });
    this.activatedRoute.data.subscribe(({ orders }) => {
      this.orders = orders;
    });
  }
}
