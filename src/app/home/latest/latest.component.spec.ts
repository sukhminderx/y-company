import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LatestComponent } from './latest.component';

describe('LatestComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, LatestComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LatestComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
