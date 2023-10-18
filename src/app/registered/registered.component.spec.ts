import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisteredComponent } from './registered.component';

describe('RegisteredComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RegisteredComponent],
    })
  );

  it('should create the component', () => {
    const fixture = TestBed.createComponent(RegisteredComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
