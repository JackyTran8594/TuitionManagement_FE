import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { Account, RequestDTO } from './account';

@Injectable()
export class AccountApi {

  private readonly apiController: string = 'accounts';

  constructor(private http: HttpService) {

  }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Account>> {
    let params = new HttpParams()
      .set("page", pageNumber)
      .set("size", pageSize)
      // .set("txtSearch", txtSearch);
    return this.http.get(this.apiController, { params });
  }
  create(item: RequestDTO): Observable<Account> {
    return this.http.post(this.apiController, item);
  }
  update(item: Account): Observable<Account> {
    return this.http.put(this.apiController + '/' + item.id, item);
  }
  get(id: number): Observable<Account> {
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
