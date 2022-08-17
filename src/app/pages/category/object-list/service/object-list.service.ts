import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { ObjectList, ObjectListData } from './object-list';
import { ObjectListApi } from './object-list.api';

@Injectable()
export class ObjectListService implements ObjectListData {

  constructor(private api: ObjectListApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<ObjectList>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<ObjectList> {
    return this.api.getById(id);
  }

  create(ObjectList: ObjectList): Observable<ObjectList> {
    return this.api.create(ObjectList);
  }

  update(ObjectList: ObjectList): Observable<ObjectList> {
    return this.api.update(ObjectList);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
