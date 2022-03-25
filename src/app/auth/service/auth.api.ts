import { InteractivityChecker } from '@angular/cdk/a11y';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbTokenLocalStorage } from '@nebular/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../shared/http.service';
import { IAccessToken, IUser } from './auth';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class AuthApi {

  private readonly apiController: string = 'authenticate';

  token: IAccessToken = {};


  constructor(private http: HttpService) {

  }

  authenticate(item: IUser): Observable<IAccessToken> {
    return this.http.post(this.apiController, item);
  }


  




}
