import { Observable } from "rxjs";
import { TableData } from "../../../shared/table-data";

export interface Tuition {
    id: number;
    studentId: string;
    money: number;
    slop: number;
    timeStamp: Date;
    note: string;
    isChecked: boolean
}

export abstract class TuitionData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Tuition>>;
    abstract getById(id: number): Observable<Tuition>;
    abstract create(Fee: Tuition): Observable<Tuition>;
    abstract update(Fee: Tuition): Observable<Tuition>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}