import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/http.service';
import { ResponseData } from '../../../shared/responseData';
import { TableData } from '../../../shared/table-data';
import { Report } from './report';

@Injectable()
export class ReportApi {

  private readonly apiController: string = 'report'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Report>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
    .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  exportExcel(Report: Report): Observable<ResponseData<Report>> {
    return this.http.get(`${this.apiController}`, Report);
  }

  exportDoc(Report: Report): Observable<ResponseData<Report>> {
    return this.http.post(this.apiController, Report);
  }

}
