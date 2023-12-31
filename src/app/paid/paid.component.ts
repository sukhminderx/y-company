import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { Meta } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MdbCarouselModule,
    MatPaginatorModule,
  ],
})
export class PaidComponent implements OnInit {
  constructor(private metaService: Meta) {}

  ngOnInit() {
    this.metaService.updateTag({
      property: 'description',
      content: 'Y company - Order success Page', // TODO
    });
  }
}
