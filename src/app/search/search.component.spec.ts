import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SearchComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
