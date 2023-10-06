import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterItemCheckboxesComponent } from './filter-item.component';

describe('FilterItemCheckboxesComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FilterItemCheckboxesComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FilterItemCheckboxesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
