import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentComponent } from './payment.component';
import { BehaviorSubject } from 'rxjs';
import { PaymentService } from './payment.service';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
const paymentService = {
  getAddress: jasmine.createSpy('getAddress'),
  doPayment: jasmine.createSpy('doPayment'),
};
const meta = {
  updateTag: jasmine.createSpy('updateTag'),
};
const router = {
  navigate: jasmine.createSpy('navigate'),
};
describe('PaymentComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PaymentComponent],
      providers: [
        {
          provide: PaymentService,
          useValue: paymentService,
        },
        {
          provide: Meta,
          useValue: meta,
        },
        {
          provide: Router,
          useValue: router,
        },
      ],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
