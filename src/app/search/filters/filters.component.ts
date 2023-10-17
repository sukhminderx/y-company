import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FilterItemCheckboxesComponent } from './filter-item-checkboxes/filter-item.component';
import { FilterItemRangeComponent } from './filter-item-range/filter-item.component';
import { SearchService } from '../search.service';

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
export class FiltersComponent implements OnInit {
  maxCost = 1000;
  categories = [
    {
      name: 'Men',
      checked: true,
      id: 'men',
    },
    {
      name: 'Women',
      checked: true,
      id: 'women',
    },
    {
      name: 'Children',
      checked: true,
      id: 'children',
    },
  ];
  colors = [
    {
      name: 'Red',
      checked: true,
      id: 'red',
    },
    {
      name: 'Green',
      checked: true,
      id: 'green',
    },
    {
      name: 'Blue',
      checked: true,
      id: 'blue',
    },
  ];
  form = this.fb.group({
    category: [['men', 'women', 'children']],
    color: [['red', 'green', 'blue']],
    fromCost: [''],
    toCost: ['1000'],
    fromDiscount: [''],
    toDiscount: ['100'],
  });
  @Output() callFilter = new EventEmitter();

  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit() {
    this.form.valueChanges.subscribe((v) => {
      console.log(v);
    });
    this.filter();
  }

  categoryClicked(item: any, list: any) {
    const selectedItem = list.find((l: any) => l.name === item.name);
    selectedItem.checked = !selectedItem.checked;
    const selectedItems = list
      .filter((l: any) => l.checked)
      .map((i: any) => i.id);
    this.form.get('category')?.setValue(selectedItems);
  }

  colorsClicked(item: any, list: any) {
    const selectedItem = list.find((l: any) => l.name === item.name);
    selectedItem.checked = !selectedItem.checked;
    const selectedItems = list
      .filter((l: any) => l.checked)
      .map((i: any) => i.id);
    this.form.get('color')?.setValue(selectedItems);
  }

  filter() {
    this.callFilter.emit(this.form.value);
  }
}
