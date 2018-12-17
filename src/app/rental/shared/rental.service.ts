import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';
import { LOCALHOST_URL } from '../../shared/consts/consts';

@Injectable()
export class RentalService {

  constructor(private http: HttpClient) {}

  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/rentals/` + rentalId);
  }

  public getRentals(): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/rentals`);
  }

  public getRentalsByCity(city: string): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/rentals?city=${city}`);
  }

  public createRental(rental: Rental): Observable<any> {
    return this.http.post(`${LOCALHOST_URL}/rentals`, rental);
  }

  public getUserRentals(): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/rentals/manage`);
  }

  public deleteRental(rentalId: string): Observable<any> {
    return this.http.delete(`${LOCALHOST_URL}/rentals/${rentalId}`);
  }

  public updateDental(rentalId: string, rentalData: any): Observable<any> {
    return this.http.patch(`${LOCALHOST_URL}/rentals/${rentalId}`, rentalData);
  }

  public verifyRentalUser(rentalId: string): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/rentals/${rentalId}/verify-user`);
  }
}
