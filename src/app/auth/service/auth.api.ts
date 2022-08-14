import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../../shared/http.service';
import { AccessToken, User } from './auth';

@Injectable()
export class AuthApi {

  private readonly apiController: string = 'auth';

  // token: AccessToken = {};


  constructor(private http: HttpService) {

  }

  authenticate(item: User): Observable<AccessToken> {
    return this.http.post(this.apiController + '/login', item);
  }







}
