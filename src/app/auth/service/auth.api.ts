import { InteractivityChecker } from '@angular/cdk/a11y';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbTokenLocalStorage } from '@nebular/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../shared/http.service';
import {AccessToken, User } from './auth';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthApi {

  private readonly apiController: string = 'authenticate';

  token: AccessToken = {};


  constructor(private http: HttpService) {

  }

  authenticate(item: User): Observable<AccessToken> {
    return this.http.post(this.apiController, item);
  }


  




}
