import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NavbarComponent implements OnInit {
  form = this.fb.group({
    search: ['', Validators.required],
  });
  isLoggedIn = false;
  platformId: Object = {};
  constructor(
    private router: Router,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }

  ngOnInit() {
    this.isLoggedIn = Boolean(
      isPlatformBrowser(this.platformId) && localStorage.getItem('user')
    );
  }
  logout() {
    localStorage.removeItem('user'), this.router.navigate(['/']);
  }
  goto() {
    if (this.form.get('search')?.value) {
      this.router.navigate(['/search'], {
        queryParams: {
          search: this.form.get('search')?.value,
          title: 'Search results',
        },
      });
    }
  }
}
