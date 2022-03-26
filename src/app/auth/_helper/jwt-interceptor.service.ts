import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authService.currentUserValue;
    let token = this.authService.tokenValue;
    if (currentUser && token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token} `,
          ContentType: 'application/json',
          AccessControlAllowHeaders: 'Content-Type',
          AccessControlAllowCredentials: 'true',
          AccessControlAllowMethods: 'HEAD, GET, POST, PUT, PATCH, DELETE',
          AccessControlAllowOrigin: '*'
        }
      })
    }
    throw new Error('Method not implemented.');

    // 'Content-Type': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Credentials': 'true',
    //       'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
    //         'Access-Control-Allow-Origin': '*',


  }
}
