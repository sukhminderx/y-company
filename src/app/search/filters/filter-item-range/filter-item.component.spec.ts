import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterItemRangeComponent } from './filter-item.component';

describe('FilterItemRangeComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FilterItemRangeComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FilterItemRangeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
