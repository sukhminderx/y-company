import { Component, Inject, OnInit, PLATFORM_ID, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CartItemComponent } from './item/item.component';
import { CartSummaryomponent } from './summary/summary.component';
import { Meta } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CartService } from './cart.service';
import { ICart } from '../configs/interfaces/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MdbCarouselModule,
    MatPaginatorModule,
    CartItemComponent,
    CartSummaryomponent,
  ],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  platformId;
  items: ICart[] = [];
  constructor(
    private metaService: Meta,
    @Inject(PLATFORM_ID) platformId: Object,
    private cartService: CartService
  ) {
    this.platformId = platformId;
    effect(() => {
      this.items = this.cartService.cart();
    });
  }

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content: 'Y company - Cart Page', // TODO
    });
    this.cartService.getCart();
  }

  isVisible() {
    return isPlatformBrowser(this.platformId) && !!localStorage.getItem('cart');
  }
}
