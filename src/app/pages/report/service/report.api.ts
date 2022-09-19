import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/http.service';
import { ResponseData } from '../../../shared/responseData';
import { SearchParam } from '../../../shared/searchParam';
import { TableData } from '../../../shared/table-data';
import { Report } from './report';

@Injectable()
export class ReportApi {

  private readonly apiController: string = 'report'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, searchParam: SearchParam): Observable<TableData<Report>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      .set('txtSearch', searchParam.txtSearch)
      .set('fromDate', searchParam.fromDate)
      .set('toDate', searchParam.toDate)
      .set('code', searchParam.code);

    return this.http.get(this.apiController, { params });
  }

  exportExcel(searchParam: SearchParam): Observable<Blob> {
    const params = new HttpParams()
      .set('fromDate', searchParam.fromDate)
      .set('toDate', searchParam.toDate)
      .set('code', searchParam.code)
      .set('txtSearch', searchParam.txtSearch)
    return this.http.get(`${this.apiController}`, params);
  }

  exportDoc(searchParam: SearchParam): Observable<Blob> {
    const params = new HttpParams()
      .set('fromDate', searchParam.fromDate)
      .set('toDate', searchParam.toDate)
      .set('code', searchParam.code)
      .set('txtSearch', searchParam.txtSearch)
    return this.http.post(this.apiController, params);
  }

}
