import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  @Input() form: any;
  @Output() clicked = new EventEmitter();

  itemClicked(item: any) {
    this.clicked.emit(item);
  }
}
