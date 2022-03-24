import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../shared/http.service';
import { IAccessToken, IUser } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly endpont: string = 'authenticate'

  token: IAccessToken = {};
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private api: AuthService) {

  }

  authenticate(item: IUser): Observable<IUser> {
      return this.api.authenticate(item);
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): string {
    return this.token.id_token;
  }



}
