import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { FeeList } from './fee';

@Injectable()
export class FeeListApi {

  private readonly apiController: string = 'feeList'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<FeeList>> {
    const params = new HttpParams()
      .set('page', pageNumber)
      .set('size', pageSize)
      // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<FeeList> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(FeeList: FeeList): Observable<FeeList> {
    return this.http.post(this.apiController, FeeList);
  }

  update(FeeList: FeeList): Observable<FeeList> {
    return this.http.put(`${this.apiController}/${FeeList.id}`, FeeList);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(id: number[]): Observable<boolean> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiController}`, { params })
  }

}
