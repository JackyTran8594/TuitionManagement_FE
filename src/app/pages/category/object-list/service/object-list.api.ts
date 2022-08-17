import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { ObjectList } from './object-list';

@Injectable()
export class ObjectListApi {

  private readonly apiController: string = 'objectList';

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<ObjectList>> {
    const params = new HttpParams()
      .set('page', pageNumber)
      .set('size', pageSize)
      // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<ObjectList> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(ObjectList: ObjectList): Observable<ObjectList> {
    return this.http.post(this.apiController, ObjectList);
  }

  update(ObjectList: ObjectList): Observable<ObjectList> {
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
