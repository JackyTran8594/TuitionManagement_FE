import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../shared/http.service';
import { TableData } from '../../../../shared/table-data';
import { RoleGroup } from './role-group';

@Injectable()
export class RoleGroupApi {

  private readonly apiController: string = 'roles';

  constructor(private http: HttpService) {

  }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<RoleGroup>> {
    let params = new HttpParams()
      .set("pageNumber", pageNumber)
      .set("pageSize", pageSize)
      // .set("txtSearch", txtSearch);
    return this.http.get(this.apiController, { params });
  }

  getAll(): Observable<RoleGroup[]> {
    // let params = new HttpParams()
    //   .set("pageNumber", pageNumber)
    //   .set("pageSize", pageSize)
    //   .set("txtSearch", txtSearch);
    return this.http.get(this.apiController);
  }

  
  
  create(item: RoleGroup): Observable<RoleGroup> {
    return this.http.post(this.apiController, item);
  }
  update(item: RoleGroup): Observable<RoleGroup> {
    return this.http.put(this.apiController + '/' + item.id, item);
  }
  get(id: number): Observable<RoleGroup> {
    return this.http.get(this.apiController + '/' + id);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete(this.apiController + '/' + id);
  }

  deleteAll(ids: number[]): Observable<boolean> {
    let params = new HttpParams().set('ids', ids.toString());
    return this.http.delete(this.apiController, { params });
  }
}
