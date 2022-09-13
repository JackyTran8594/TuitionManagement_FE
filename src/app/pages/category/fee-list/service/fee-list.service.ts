import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../../../../shared/responseData';
import { TableData } from '../../../../shared/table-data';
import { FeeList, FeeListData } from './fee';
import { FeeListApi } from './fee-list.api';

@Injectable()
export class FeeListService implements FeeListData {

  constructor(private api: FeeListApi) { }

  getAll(): Observable<ResponseData<FeeList>> {
    return this.api.getAll();
  }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<FeeList>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<ResponseData<FeeList>> {
    return this.api.getById(id);
  }

  create(fee: FeeList): Observable<ResponseData<FeeList>> {
    return this.api.create(fee);
  }

  update(fee: FeeList): Observable<ResponseData<FeeList>> {
    return this.api.update(fee);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.api.deleteList(listId);
  }
}
