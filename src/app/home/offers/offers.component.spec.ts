import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OffersComponent } from './offers.component';

describe('OffersComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, OffersComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(OffersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
