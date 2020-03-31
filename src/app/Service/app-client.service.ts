import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getJsonFromApi(): Observable<Object> {
    return this.httpClient.get('http://localhost:8080/inscription/showall');
    // return this.httpClient.get('/assets/data.json');
  }
}
//
// export interface RootObject {
//   id: number;
//   creationDate: Date;
//   message: string;
// }
