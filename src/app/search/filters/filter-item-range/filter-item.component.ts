import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-filter-item-range',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
})
export class FilterItemRangeComponent {
  @Input() title = '';
  @Input() min = 0;
  @Input() max = 100;
}
