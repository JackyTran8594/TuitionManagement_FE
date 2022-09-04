import { Observable } from "rxjs";
import { ResponseData } from "../../../shared/responseData";
import { TableData } from "../../../shared/table-data";
import { BaseObject } from "../../models/baseObject";

export interface Tuition extends BaseObject {
    id?: number;
    studentId: string;
    money: number;
    timeStamp: Date;
    note: string;
    isChecked: boolean
}

export abstract class TuitionData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Tuition>>;
    abstract getById(id: number): Observable<ResponseData<Tuition>>;
    abstract create(Fee: Tuition): Observable<ResponseData<Tuition>>;
    abstract update(Fee: Tuition): Observable<ResponseData<Tuition>>;
    abstract delete(id: number): Observable<ResponseData<Boolean>>;
    abstract deleteList(listId: number[]): Observable<ResponseData<Boolean>>;
}