import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface FeeList {
    id: number;
    header: string;
    description: string;
    money: number;
    fee_id: number;
    status?: string
    isChecked?: boolean
}

export abstract class FeeListData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<FeeList>>;
    abstract getById(id: number): Observable<FeeList>;
    abstract create(Fee: FeeList): Observable<FeeList>;
    abstract update(Fee: FeeList): Observable<FeeList>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}