import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { TrainClass } from './train-class';

@Injectable()
export class TrainClassApi {

  private readonly apiController: string = 'trainClass'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<TrainClass>> {
    const params = new HttpParams()
      .set('page', pageNumber)
      .set('size', pageSize)
      // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<TrainClass> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(TrainClass: TrainClass): Observable<TrainClass> {
    return this.http.post(this.apiController, TrainClass);
  }

  update(TrainClass: TrainClass): Observable<TrainClass> {
    return this.http.put(`${this.apiController}/${TrainClass.id}`, TrainClass);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(id: number[]): Observable<boolean> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiController}`, { params })
  }

}
