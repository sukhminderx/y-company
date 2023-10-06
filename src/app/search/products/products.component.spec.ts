import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ProductsComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
