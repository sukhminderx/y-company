import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterItemCheckboxesComponent } from './filter-item-checkboxes/filter-item.component';
import { FilterItemRangeComponent } from './filter-item-range/filter-item.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FilterItemCheckboxesComponent,
    FilterItemRangeComponent,
  ],
})
export class FiltersComponent {
  maxCost = 1000;
  categories = [
    {
      name: 'Men',
      checked: false,
    },
    {
      name: 'Women',
      checked: false,
    },
    {
      name: 'Children',
      checked: false,
    },
  ];
  colors = [
    {
      name: 'Red',
      checked: false,
    },
    {
      name: 'Green',
      checked: false,
    },
    {
      name: 'Blue',
      checked: false,
    },
    {
      name: 'Any',
      checked: false,
    },
  ];
}
