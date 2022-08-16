import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../shared/table-data';
import { Fee, FeeData } from './Fee';
import { FeeApi } from './fee.api';

@Injectable()
export class FeeService implements FeeData {

  constructor(private api: FeeApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Fee>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<Fee> {
    return this.api.getById(id);
  }

  create(fee: Fee): Observable<Fee> {
    return this.api.create(fee);
  }

  update(fee: Fee): Observable<Fee> {
    return this.api.update(fee);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
