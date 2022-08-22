import { Observable } from "rxjs";
import { TableData } from "../../../shared/table-data";
import { BaseObject } from "../../models/baseObject";
import { MessageResponse } from "../../models/messageResponse";

export interface Student extends BaseObject {
    id?: number;
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
    abstract getById(id: number): Observable<MessageResponse<Student>>;
    abstract create(Student: Student): Observable<MessageResponse<Student>>;
    abstract update(Student: Student): Observable<MessageResponse<Student>>;
    abstract delete(id: number): Observable<MessageResponse<string>>;
    abstract deleteList(listId: number[]): Observable<MessageResponse<string>>;
}