import { Observable } from "rxjs";
import { TableData } from "../../../shared/table-data";

export interface Student {
    id: number;
    studentId: string;
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
    abstract getById(id: number): Observable<Student>;
    abstract create(Student: Student): Observable<Student>;
    abstract update(Student: Student): Observable<Student>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}