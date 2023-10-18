import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PaymentService } from './payment.service';
import { cardLength } from '../configs/validators/cardLength';
import { cvv } from '../configs/validators/cvv';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MdbCarouselModule,
    MatPaginatorModule,
    RouterLink,
  ],
  providers: [PaymentService],
})
export class PaymentComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pincode: ['', [Validators.required]],
    cardNumber: ['', [Validators.required, cardLength]],
    month: ['', [Validators.required]],
    year: ['', [Validators.required]],
    cvv: ['', [Validators.required, cvv]],
  });
  isLoggedIn = false;
  platformId: Object = {};

  constructor(
    private metaService: Meta,
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content: 'Y company - Payment Page', // TODO
    });
    this.isLoggedIn = Boolean(
      isPlatformBrowser(this.platformId) && localStorage.getItem('user')
    );
    if (this.isLoggedIn) {
      this.paymentService.getAddress().subscribe({
        next: (address: any) => {
          this.form.patchValue({ ...address });
        },
      });
    }
  }

  pay() {
    if (this.form.valid) {
      this.paymentService.doPayment(this.form.value);
      this.router.navigate(['/paid']);
    }
  }
}
