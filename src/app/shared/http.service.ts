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

  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Headers': 'Content-Type',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
  //   'Access-Control-Allow-Origin': '*',
  //   'key': 'x-api-key',

  // });



  constructor(private http: HttpClient) { }


  get(endpoint: string, options?): Observable<any> {
    // const httpOptions: any = {
    //   headers: this.headers, options: options
    // }
    return this.http.get(`${this.apiUrl}/${endpoint}`, options);
  }

  post(endpoint: string, data, options?): Observable<any> {
    // const httpOptions: any = {
    //   headers: this.headers, options: options
    // }
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
  }

  put(endpoint: string, data, options?): Observable<any> {
    // const httpOptions: any = {
    //   headers: this.headers, options: options
    // }
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
  }

  delete(endpoint: string, options?): Observable<any> {
    // const httpOptions: any = {
    //   headers: this.headers, options: options
    // }
    return this.http.delete(`${this.apiUrl}/${endpoint}`, options);
  }
}
