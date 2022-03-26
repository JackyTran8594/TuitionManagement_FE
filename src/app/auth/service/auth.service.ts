import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbTokenLocalStorage } from '@nebular/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAccessToken, IUser } from './auth';
import { AuthApi } from './auth.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: IAccessToken = {};
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private api: AuthApi, private tokenStorage: NbTokenLocalStorage) {

  }

  authenticate(item: IUser): Observable<IAccessToken> {
    return this.api.authenticate(item);
  }

  isAuthenticated(): boolean {
    let token = <IAccessToken>JSON.parse(localStorage.getItem('access_token'));
    console.log(token);
    console.log(token.id_token);

    if (token.id_token) {
      return true;
    } else { return false; }
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): string {
    return this.token.id_token;
  }



}
