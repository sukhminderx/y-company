import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, LayoutComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
