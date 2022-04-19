import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { Account, AccountData, RequestDTO } from './account';
import { AccountApi } from './account.api';

@Injectable()
export class AccountService implements AccountData{

  constructor(private api: AccountApi) { }


  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Account>> {
    return this.api.list(pageNumber - 1, pageSize, txtSearch);
  }
  create(item: RequestDTO): Observable<Account> {
    return this.api.create(item);
  }
  update(item: Account): Observable<Account> {
    return this.api.update(item);
  }
  get(id: number): Observable<Account> {
    return this.api.get(id);

  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
  
  deleteAll(ids: number[]): Observable<boolean> {
    return this.api.deleteAll(ids);
  }
}
