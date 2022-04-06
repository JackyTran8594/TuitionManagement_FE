import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { User, UserData } from './user';
import { UserApi } from './user.api';

@Injectable()
export class UserService implements UserData {

  constructor(private api: UserApi) { }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>> {
    return this.api.list(pageNumber, pageSize, txtSearch);
  }
  create(item: User): Observable<User> {
    return this.api.create(item);
  }
  update(item: User): Observable<User> {
    return this.api.update(item);
  }
  get(id: number): Observable<User> {
    return this.api.get(id);

  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
  
  deleteAll(ids: number[]): Observable<boolean> {
    return this.api.deleteAll(ids);
  }

  
}
