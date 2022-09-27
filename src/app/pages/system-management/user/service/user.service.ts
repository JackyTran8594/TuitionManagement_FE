import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { TableData } from '../../../../shared/table-data';
import { User, UserData, UserInfo } from './user';
import { UserApi } from './user.api';

@Injectable()
export class UserService implements UserData {

  public userInfo: UserInfo = {
    username: '',
    permission: undefined,
    role: undefined
  }


  constructor(private api: UserApi) { }

  getByUsername(username: string): Observable<User> {
    return this.api.getByUsername(username);
  }

  // list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>> {
  //   return this.api.list(pageNumber, pageSize, txtSearch);
  // }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<User[]> {
    return this.api.list(pageNumber - 1, pageSize, txtSearch);
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

  getUserInfo() {
    debugger;
    return this.api.getUserInfo().pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
        this.userInfo = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}
