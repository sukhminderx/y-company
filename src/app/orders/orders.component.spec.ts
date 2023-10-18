import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, OrdersComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(OrdersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
