import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartSummaryomponent } from './summary.component';

describe('CartSummaryomponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CartSummaryomponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CartSummaryomponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
