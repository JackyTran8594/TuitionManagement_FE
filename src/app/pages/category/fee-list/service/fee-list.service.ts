import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { FeeList, FeeListData } from './fee';
import { FeeListApi } from './fee-list.api';

@Injectable()
export class FeeListService implements FeeListData {

  constructor(private api: FeeListApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<FeeList>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<FeeList> {
    return this.api.getById(id);
  }

  create(fee: FeeList): Observable<FeeList> {
    return this.api.create(fee);
  }

  update(fee: FeeList): Observable<FeeList> {
    return this.api.update(fee);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
