import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class ExtensionService {

  constructor(private http: HttpService) { }

  uploadFile(file: File, endpoint: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = this.http.post(endpoint, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return req;
  }

  

}
