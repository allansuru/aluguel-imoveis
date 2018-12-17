import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking.model';
import { HttpClient } from '@angular/common/http';
import { LOCALHOST_URL } from '../../shared/consts';

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) {}

  public createBooking(booking: Booking): Observable<any> {
    return this.http.post(`${LOCALHOST_URL}/bookings`, booking);
  }

  public getUserBookings(): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/bookings/manage`);
  }
}
