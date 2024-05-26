import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  ROOT_PATH = "http://localhost:4502/api/v1/";

  constructor(private http: HttpClient) { }

  get(url:string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body: any): Observable<any> {
    const fullUrl = this.ROOT_PATH + url
    return this.http.post(fullUrl, body);
  }

}
