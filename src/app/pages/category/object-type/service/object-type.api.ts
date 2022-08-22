import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { ObjectType } from './object-type';

@Injectable()
export class ObjectTypeApi {

  private readonly apiController: string = 'objectType';

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<ObjectType>> {
    const params = new HttpParams()
    .set('pageNumber', pageNumber)
    .set('pageSize', pageSize)
      // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<ObjectType> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(ObjectList: ObjectType): Observable<ObjectType> {
    return this.http.post(this.apiController, ObjectList);
  }

  update(ObjectList: ObjectType): Observable<ObjectType> {
    return this.http.put(`${this.apiController}/${ObjectList.id}`, ObjectList);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(id: number[]): Observable<boolean> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiController}`, { params })
  }

}
