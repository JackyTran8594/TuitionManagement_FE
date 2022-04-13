import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../../shared/http.service';
import { TableData } from '../../../../../shared/table-data';
import { Functional } from './functional';

@Injectable()
export class FunctionalApi {

  private readonly apiController: string = 'functionals';

  constructor(private http: HttpService) { }

  list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Functional>> {
    let params = new HttpParams()
      .set("page", pageNumber)
      .set("size", pageSize)
      .set("txtSearch", txtSearch);
    return this.http.get(this.apiController, { params });
  }

  getAll(): Observable<Functional[]> {
    return this.http.get(this.apiController);
  }


}
