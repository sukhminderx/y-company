import { Component, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    RouterLink,
    NgOptimizedImage,
  ],
})
export class CartSummaryomponent {
  productSubtotal = 0;
  discount = 0;
  shipping = 100;
  taxes = 100;
  constructor(private cartService: CartService) {
    effect(() => {
      this.productSubtotal = 0;
      this.discount = 0;
      const items = this.cartService.cart();
      items.forEach((p: any) => {
        this.productSubtotal += p.price * p.count;
        this.discount += p.discount * p.count;
      });
    });
  }
}
