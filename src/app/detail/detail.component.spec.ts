import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DetailComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(DetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
