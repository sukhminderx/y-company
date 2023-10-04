import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(BrowserModule, AppRoutingModule),
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    provideAnimations(),
  ],
};
