
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LOCALHOST_URL } from '../../../shared/consts/consts';

@Injectable()
export class ImageUploadService {

  constructor(private http: HttpClient){}


  public uploadImage(image: File): Observable<string | any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(`${LOCALHOST_URL}/image-upload`, formData).pipe(map(((json: any) =>  json.imageUrl)));
  }
}
