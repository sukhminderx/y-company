import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {
  constructor(private httpClient: HttpClient) {}

  doPayment(details: any) {
    // mock placeholder for payment api call
  }
}
