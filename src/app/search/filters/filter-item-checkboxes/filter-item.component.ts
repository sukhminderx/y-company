import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-filter-item-checkboxes',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
  ],
})
export class FilterItemCheckboxesComponent {
  @Input() title = '';
  @Input() list: any = [];
}
