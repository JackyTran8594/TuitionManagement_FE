import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { ResponseData } from '../../../../shared/responseData';
import { TableData } from '../../../../shared/table-data';
import { TrainClass } from './train-class';

@Injectable()
export class TrainClassApi {

  private readonly apiController: string = 'trainClass'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<TrainClass>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);
    // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<ResponseData<TrainClass>> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  getAll() : Observable<ResponseData<TrainClass>> {
    return this.http.get(`${this.apiController}/getAll`)
  }


  create(TrainClass: TrainClass): Observable<ResponseData<TrainClass>> {
    return this.http.post(this.apiController, TrainClass);
  }

  update(TrainClass: TrainClass): Observable<ResponseData<TrainClass>> {
    return this.http.put(`${this.apiController}/${TrainClass.id}`, TrainClass);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.http.post(`${this.apiController}/deleteAll`, listId)
  }

}
