import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PaymentComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
