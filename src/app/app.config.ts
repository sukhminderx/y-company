import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideAnimations(),
  ],
};
