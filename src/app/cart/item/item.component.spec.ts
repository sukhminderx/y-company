import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartItemComponent } from './item.component';

describe('CartItemComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CartItemComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CartItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
