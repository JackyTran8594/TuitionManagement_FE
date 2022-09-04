import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tuition, TuitionData } from './tuition';
import { TuitionApi } from './tuition.api';
import { TableData } from '../../../shared/table-data';
import { ResponseData } from '../../../shared/responseData';

@Injectable()
export class TuitionService implements TuitionData {

  constructor(private api: TuitionApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Tuition>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<ResponseData<Tuition>> {
    return this.api.getById(id);
  }

  create(fee: Tuition): Observable<ResponseData<Tuition>> {
    return this.api.create(fee);
  }

  update(fee: Tuition): Observable<ResponseData<Tuition>> {
    return this.api.update(fee);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.api.deleteList(listId);
  }
}
