import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ROOT_PATH = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(this.ROOT_PATH, environment);
  }

  get(url: string): Observable<any> {
    return this.http.get(this.ROOT_PATH + url, { withCredentials: true });
  }

  post(url: string, body: any): Observable<any> {
    const fullUrl = this.ROOT_PATH + url;
    return this.http.post(fullUrl, body, { withCredentials: true });
  }
}
