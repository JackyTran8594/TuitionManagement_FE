import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NbTokenLocalStorage } from '@nebular/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccessToken, User } from './auth';
import { AuthApi } from './auth.api';

@Injectable()
export class AuthService {

  token: AccessToken;
  private currentUserSubject: BehaviorSubject<any>;
  private tokenSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private api: AuthApi) {
    let helper = new JwtHelperService();
    this.token = <AccessToken>(JSON.parse(localStorage.getItem('access_token')));
    if(this.token) {
      let user = helper.decodeToken(this.token.id_token)['sub'];
      this.currentUserSubject = new BehaviorSubject<any>(user);
      this.currentUser = this.currentUserSubject.asObservable();
      this.tokenSubject = new BehaviorSubject<any>(this.token.id_token);
    }
  }

  authenticate(item: User): Observable<AccessToken> {
    return this.api.authenticate(item);
  }

  isAuthenticated(): boolean {
    let token = <AccessToken>JSON.parse(localStorage.getItem('access_token'));
    // console.log(token);
    // console.log(token.id_token);

    if (token) {
      if (token.id_token) {
        return true;

      } else { return false; }
    } else { return false; }
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): string {
    return this.tokenSubject.value;
  }



}
