import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../../../shared/responseData";
import { SearchParam } from "../../../shared/searchParam";
import { TableData } from "../../../shared/table-data";
import { ReportModule } from "../Report.module";

export interface Report {
    id?: number,
    registrationId?: string;

    courseId?: string;

    citizenId?: string;

    tempName?: string;

    firstName?: string;

    lastName?: string;

    fullName?: string;

    teacher?: string;

    header?: string;

    tuitionFeePaid?: number;

    tuitionFeePayable?: number;
}

export abstract class ReportData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Report>>;
    abstract exportExcel(searchParam: SearchParam): Observable<Blob>;
    abstract exportDoc(searchParam: SearchParam): Observable<Blob>;
}