import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CartComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
