import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  get apiUrl(): string {
    return environment.apiUrl;
  }

  headers = new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*'
  });



  constructor(private http: HttpClient) { }


  get(endpoint: string, options?): Observable<any> {
    const httpOptions: any = {
      headers: this.headers, options: options
    }
    return this.http.get(`${this.apiUrl}/${endpoint}`, httpOptions);
  }

  post(endpoint: string, data, options?): Observable<any> {
    const httpOptions: any = {
      headers: this.headers, options: options
    }
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, httpOptions);
  }

  put(endpoint: string, data, options?): Observable<any> {
    const httpOptions: any = {
      headers: this.headers, options: options
    }
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, httpOptions);
  }

  delete(endpoint: string, data, options?): Observable<any> {
    const httpOptions: any = {
      headers: this.headers, options: options
    }
    return this.http.delete(`${this.apiUrl}/${endpoint}`, httpOptions);
  }
}
