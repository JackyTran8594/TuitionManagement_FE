import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../../../shared/responseData";
import { TableData } from "../../../shared/table-data";
import { ReportModule } from "../Report.module";

export interface Report {
    id?: number,

}

export abstract class ReportData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Report>>;
    abstract exportExcel(report: Report): Observable<ResponseData<Report>>;
    abstract exportDoc(report: Report): Observable<ResponseData<Report>>;
}