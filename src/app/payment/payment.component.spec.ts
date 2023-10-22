import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentComponent } from './payment.component';
import { of } from 'rxjs';
import { PaymentService } from './payment.service';
import { Meta } from '@angular/platform-browser';
import { Router, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
const paymentService = {
  getAddress: jasmine.createSpy('getAddress').and.returnValue(of({})),
  doPayment: jasmine.createSpy('doPayment'),
};
const meta = {
  updateTag: jasmine.createSpy('updateTag'),
};
const router = {
  navigate: jasmine.createSpy('navigate'),
};
describe('PaymentComponent', () => {
  let fixture: any;
  let component: any;
  beforeEach(() => {
    TestBed.overrideComponent(PaymentComponent, {
      set: {
        providers: [
          {
            provide: PaymentService,
            useValue: paymentService,
          },
        ],
      },
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PaymentComponent],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        provideHttpClient(),
        provideRouter([]),
        {
          provide: Meta,
          useValue: meta,
        },
        {
          provide: Router,
          useValue: router,
        },
      ],
    });

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should test updateTag', () => {
    component.ngOnInit();
    expect(meta.updateTag).toHaveBeenCalled();
  });

  it('should test isLoggedIn', () => {
    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return 'test';
    });
    component.ngOnInit();
    expect(component.isLoggedIn).toBeTrue();
    expect(paymentService.getAddress).toHaveBeenCalled();
  });

  it('should test pay', () => {
    component.form.patchValue({
      email: 'qwerty@gmail.com',
      name: 'qwerty',
      address: 'qwerty',
      phone: 'qwerty',
      city: 'qwerty',
      state: 'qwerty',
      pincode: 'qwerty',
      cardNumber: '2222222222222222',
      month: 'qwerty',
      year: 'qwerty',
      cvv: '233',
    });
    component.pay();
    expect(paymentService.doPayment).toHaveBeenCalled();
  });
});
