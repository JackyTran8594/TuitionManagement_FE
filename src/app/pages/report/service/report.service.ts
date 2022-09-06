import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../../../shared/responseData';
import { TableData } from '../../../shared/table-data';
import { Report, ReportData } from './report';
import { ReportApi } from './report.api';

@Injectable()
export class ReportService implements ReportData {

  constructor(private api: ReportApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Report>> {
     return this.api.paging(pageNumber, pageSize, txtSearch);
  }
  exportExcel(report: Report): Observable<ResponseData<Report>> {
    return this.api.exportExcel(report);
  }
  exportDoc(Report: Report): Observable<ResponseData<Report>> {
    throw new Error('Method not implemented.');
  }
}
