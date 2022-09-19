import { Injectable } from '@angular/core';
import { report } from 'process';
import { Observable } from 'rxjs';
import { ResponseData } from '../../../shared/responseData';
import { SearchParam } from '../../../shared/searchParam';
import { TableData } from '../../../shared/table-data';
import { Report, ReportData } from './report';
import { ReportApi } from './report.api';


@Injectable()
export class ReportService implements ReportData {

  constructor(private api: ReportApi) { }

  paging(pageNumber: number, pageSize: number, searchParam: SearchParam): Observable<TableData<Report>> {
     return this.api.paging(pageNumber, pageSize, searchParam);
  }
  exportExcel(searchParam: SearchParam): Observable<Blob> {
    return this.api.exportExcel(searchParam);
  }

  exportDoc(searchParam: SearchParam): Observable<Blob> {
    return this.api.exportDoc(searchParam);
    
  }
}
