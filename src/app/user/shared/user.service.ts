import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LOCALHOST_URL } from '../../shared/consts';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  public getUser(userId: string): Observable<any> {
    return this.http.get(`${LOCALHOST_URL}/users/${userId}`);
  }

}
