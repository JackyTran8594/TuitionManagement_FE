import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { User, UserInfo } from './user';

@Injectable()
export class UserApi {

  private readonly apiController: string = 'users';
  private readonly apiControllerV2: string = 'users/v3/users-managed'

  constructor(private http: HttpService) {

  }

  // list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>> {
  //   let params = new HttpParams()
  //     .set("page", pageNumber)
  //     .set("size", pageSize)
  //     // .set("txtSearch", txtSearch);
  //   return this.http.get(this.apiControllerV2, { params });
  // }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<User[]> {
    let params = new HttpParams()
      .set("page", pageNumber)
      .set("size", pageSize)
    // .set("txtSearch", txtSearch);
    return this.http.get(this.apiControllerV2, { params });
  }

  create(item: User): Observable<User> {
    return this.http.post(this.apiController, item);
  }
  update(item: User): Observable<User> {
    return this.http.put(this.apiController + '/' + item.id, item);
  }
  get(id: number): Observable<User> {
    return this.http.get(this.apiController + '/' + id);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete(this.apiController + '/' + id);
  }

  deleteAll(ids: number[]): Observable<boolean> {
    let params = new HttpParams().set('ids', ids.toString());
    return this.http.delete(this.apiController, { params });
  }

  getByUsername(username: string): Observable<User> {
    return this.http.get(this.apiController + '/' + username);
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get(this.apiController + '/userInfo');
  }
}
