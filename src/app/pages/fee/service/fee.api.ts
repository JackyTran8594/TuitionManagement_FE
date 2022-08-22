import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/http.service';
import { TableData } from '../../../shared/table-data';
import { Fee } from './fee';

@Injectable()
export class FeeApi {

  private readonly apiController: string = 'fee'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Fee>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<Fee> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(Fee: Fee): Observable<Fee> {
    return this.http.post(this.apiController, Fee);
  }

  update(Fee: Fee): Observable<Fee> {
    return this.http.put(`${this.apiController}/${Fee.id}`, Fee);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(id: number[]): Observable<boolean> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiController}`, { params })
  }

}
