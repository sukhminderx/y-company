import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    NgOptimizedImage,
  ],
})
export class CartItemComponent {
  @Input() item: any;

  constructor(private cartService: CartService) {}

  add() {
    const cart = this.cartService.cart();
    let count = this.item.count + 1;
    const cartItem = cart.find((c: any) => c.id === this.item.id);
    cartItem.count = count;
    this.cartService.cart.set(cart);
  }

  remove() {
    let cart = this.cartService.cart();
    if (this.item.count !== 1) {
      let count = this.item.count - 1;
      const cartItem = cart.find((c: any) => c.id === this.item.id);
      cartItem.count = count;
      this.cartService.cart.set(cart);
    } else {
      cart = cart.filter((c: any) => c.id !== this.item.id);
      this.cartService.cart.set(cart);
    }
  }
}
