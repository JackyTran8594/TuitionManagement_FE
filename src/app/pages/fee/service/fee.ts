import { Observable } from "rxjs";
import { TableData } from "../../../shared/table-data";

export interface Fee {
    id: number;

    header: string;
    description: string;

    money: number;
    fee_id: number;
    status?: string
    isChecked?: boolean
}

export abstract class FeeData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Fee>>;
    abstract getById(id: number): Observable<Fee>;
    abstract create(Fee: Fee): Observable<Fee>;
    abstract update(Fee: Fee): Observable<Fee>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}