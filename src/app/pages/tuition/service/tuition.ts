import { Observable } from "rxjs";
import { ResponseData } from "../../../shared/responseData";
import { SearchParam } from "../../../shared/searchParam";
import { TableData } from "../../../shared/table-data";
import { BaseObject } from "../../models/baseObject";

export interface Tuition extends BaseObject {
    id?: number;
    studentId: number;
    money: number;
    timeStamp: Date;
    note: string;
    isChecked: boolean
}

export abstract class TuitionData {
    abstract paging(pageNumber: number, pageSize: number, param: Map<string, string>): Observable<TableData<Tuition>>;
    // abstract paging(pageNumber: number, pageSize: number, param: string): Observable<TableData<Tuition>>;
    abstract getAllWithId(id: number): Observable<ResponseData<Tuition>>;
    abstract getById(id: number): Observable<ResponseData<Tuition>>;
    abstract create(Fee: Tuition): Observable<ResponseData<Tuition>>;
    abstract update(Fee: Tuition): Observable<ResponseData<Tuition>>;
    abstract delete(id: number): Observable<ResponseData<Boolean>>;
    abstract deleteList(listId: number[]): Observable<ResponseData<Boolean>>;
}