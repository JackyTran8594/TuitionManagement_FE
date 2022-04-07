import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { RoleGroup, RoleGroupData } from './role-group';
import { RoleGroupApi } from './role-group.api';

@Injectable()
export class RoleGroupService implements RoleGroupData {

  constructor(private api: RoleGroupApi) { }
  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<RoleGroup>> {
    return this.api.list(pageNumber, pageSize, txtSearch);

  }
  create(item: RoleGroup): Observable<RoleGroup> {
    return this.api.create(item);
  }
  update(item: RoleGroup): Observable<RoleGroup> {
    return this.api.update(item);

  }
  get(id: number): Observable<RoleGroup> {
    return this.api.get(id);

  }
  delete(id: number): Observable<boolean> {
    return this.api.delete(id);

  }
  deleteAll(ids: number[]): Observable<boolean> {
    return this.api.deleteAll(ids);
  }

}
