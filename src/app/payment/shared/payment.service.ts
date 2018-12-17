import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LOCALHOST_URL } from '../../shared/consts/consts';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) {}

  public getPendingPayments(): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/payments`);
  }

  public acceptPayment(payment): Observable<any> {
    return this.http.post(`${LOCALHOST_URL}/payments/accept`, payment);
  }


  public declinePayment(payment): Observable<any> {
    return this.http.post(`${LOCALHOST_URL}/payments/decline`, payment);
  }
}
