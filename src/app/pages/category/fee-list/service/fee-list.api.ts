import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { FeeList } from './fee';
import { ResponseData } from "../../../../shared/responseData";

@Injectable()
export class FeeListApi {

  private readonly apiController: string = 'fee'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<FeeList>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
    // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getAll() : Observable<ResponseData<FeeList>> {
    return this.http.get(`${this.apiController}/getAll`)
  }

  getById(id: number): Observable<ResponseData<FeeList>> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(FeeList: FeeList): Observable<ResponseData<FeeList>> {
    return this.http.post(this.apiController, FeeList);
  }

  update(FeeList: FeeList): Observable<ResponseData<FeeList>> {
    return this.http.put(`${this.apiController}/${FeeList.id}`, FeeList);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.http.post(`${this.apiController}/deleteAll`, listId)
  }

}
