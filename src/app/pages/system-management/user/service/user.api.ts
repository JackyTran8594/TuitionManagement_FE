import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { User } from './user';

@Injectable()
export class UserApi {

  private readonly apiController: string = 'user';

  constructor(private http: HttpService) {

  }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>> {
    let params = new HttpParams()
      .set("pageNumber", pageNumber)
      .set("pageSize", pageSize)
      .set("txtSearch", txtSearch);
    return this.http.get(this.apiController, { params });
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
}
