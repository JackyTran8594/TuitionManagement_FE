import { Observable } from "rxjs";
import { ResponseData } from "../../../shared/responseData";
import { TableData } from "../../../shared/table-data";
import { BaseObject } from "../../models/baseObject";

export interface Student extends BaseObject {
    id?: number;
    registrationId: string;
    courseId: string;
    citizenId: string;
    firstName: string;
    tempName: string;
    fullName: string;
    image: string;
    trainClassId: string;
    note: string;
    tuitionId: number;
    feeId: number;
    isChecked: boolean
}

export abstract class StudentData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Student>>;
    abstract getById(id: number): Observable<ResponseData<Student>>;
    abstract create(Student: Student): Observable<ResponseData<Student>>;
    abstract update(Student: Student): Observable<ResponseData<Student>>;
    abstract delete(id: number): Observable<ResponseData<Boolean>>;
    abstract deleteList(listId: number[]): Observable<ResponseData<Boolean>>;
}