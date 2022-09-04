import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/http.service';
import { ResponseData } from '../../../shared/responseData';
import { TableData } from '../../../shared/table-data';
import { Tuition } from './tuition';

@Injectable()
export class TuitionApi {

  private readonly apiController: string = 'tuition'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Tuition>> {
    const params = new HttpParams()
      .set('page', pageNumber)
      .set('size', pageSize)
      // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<ResponseData<Tuition>> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(Tuition: Tuition): Observable<ResponseData<Tuition>> {
    return this.http.post(this.apiController, Tuition);
  }

  update(Tuition: Tuition): Observable<ResponseData<Tuition>> {
    return this.http.put(`${this.apiController}/${Tuition.id}`, Tuition);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.http.post(`${this.apiController}/deleteAll`, listId)
  }

}
