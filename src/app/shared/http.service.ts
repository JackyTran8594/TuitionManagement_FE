import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class HttpService {

  get apiUrl(): string {
    return environment.apiUrl;
  }

  constructor(private http: HttpClient) { }


  get(endpoint: string, options?): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, options);
  }

  post(endpoint: string, data, options?): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
  }

  put(endpoint: string, data, options?): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, options);
  }

  delete(endpoint: string, options?): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`, options);
  }
}
