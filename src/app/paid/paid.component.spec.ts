import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaidComponent } from './paid.component';

describe('PaidComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PaidComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PaidComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
