import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  register(details: any) {
    // mock placeholder for payment api call
  }
}
