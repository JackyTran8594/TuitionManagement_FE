import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { ObjectType } from './object-type';
import { ResponseData } from "../../../../shared/responseData";

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

  getById(id: number): Observable<ResponseData<ObjectType>> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(ObjectList: ObjectType): Observable<ResponseData<ObjectType>> {
    return this.http.post(this.apiController, ObjectList);
  }

  update(ObjectList: ObjectType): Observable<ResponseData<ObjectType>> {
    return this.http.put(`${this.apiController}/${ObjectList.id}`, ObjectList);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.http.post(`${this.apiController}/deleteAll`, listId)
  }

}
