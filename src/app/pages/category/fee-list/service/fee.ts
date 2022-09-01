import { Observable } from "rxjs";
import { ResponseData } from "../../../../shared/responseData";
import { TableData } from "../../../../shared/table-data";

export interface FeeList {
    id?: number;
    header: string;
    description: string;
    money: number;
    isChecked: boolean
}

export abstract class FeeListData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<FeeList>>;
    abstract getById(id: number): Observable<ResponseData<FeeList>>;
    abstract create(Fee: FeeList): Observable<ResponseData<FeeList>>;
    abstract update(Fee: FeeList): Observable<ResponseData<FeeList>>;
    abstract delete(id: number): Observable<ResponseData<Boolean>>;
    abstract deleteList(listId: number[]): Observable<ResponseData<Boolean>>;
}