import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(details: any) {
    // mock placeholder for payment api call
  }
}