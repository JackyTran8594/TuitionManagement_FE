import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
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
    // let helper = new JwtHelperService();

    // this.token = <AccessToken>(JSON.parse(localStorage.getItem('access_token')));
    // console.log(this.token);
    // if (this.token) {
    //   let user = helper.decodeToken(this.token.accessToken)['sub'];
    //   this.currentUserSubject = new BehaviorSubject<any>(user);
    //   this.currentUser = this.currentUserSubject.asObservable();
    //   this.tokenSubject = new BehaviorSubject<any>(this.token.accessToken);
    // }
  }

  getToken(): AccessToken {
    // let helper = new JwtHelperService();
    this.token = <AccessToken>(JSON.parse(localStorage.getItem('access_token')));
    console.log(this.token);
    return this.token;
  }

  authenticate(item: User): Observable<AccessToken> {
    return this.api.authenticate(item);
  }

  isAuthenticated(): boolean {
    let token = <AccessToken>JSON.parse(localStorage.getItem('access_token'));
    // console.log(token);
    // console.log(token.id_token);

    if (token) {
      if (token.accessToken) {
        return true;

      } else { return false; }
    } else { return false; }
  }



  public get currentUserValue(): string {
    let helper = new JwtHelperService();
    let token = this.getToken();
    if (token) {
      let user = helper.decodeToken(token.accessToken)['sub'];
      this.currentUserSubject = new BehaviorSubject<any>(user);
      this.currentUser = this.currentUserSubject.asObservable();
    }
    //  this.tokenSubject = new BehaviorSubject<any>(this.token.accessToken);
    return (this.currentUserSubject) ? (this.currentUserSubject.value) : '';
  }

  public get tokenValue(): string {
    // console.log(this.tokenSubject.value);
    let token = this.getToken();
    if (token) {
      this.tokenSubject = new BehaviorSubject<any>(token.accessToken);
    }
    return (this.tokenSubject) ? (this.tokenSubject.value) : '';
  }

}
