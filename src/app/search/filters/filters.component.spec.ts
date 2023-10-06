import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FiltersComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FiltersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
