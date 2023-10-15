import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { HomeService } from './configs/services/home.service';
import { ProductService } from './configs/services/product.service';
import { SearchService } from './configs/services/search.service';
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    provideAnimations(),
    HomeService,
    ProductService,
    SearchService,
  ],
};
