import { Observable } from "rxjs";
import { TableData } from "../../../shared/table-data";

export interface Student {
    id: number;

    header: string;
    description: string;

    money: number;
    Student_id: number;
    status?: string
    isChecked?: boolean
}

export abstract class StudentData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Student>>;
    abstract getById(id: number): Observable<Student>;
    abstract create(Student: Student): Observable<Student>;
    abstract update(Student: Student): Observable<Student>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}