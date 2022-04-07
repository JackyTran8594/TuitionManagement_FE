import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface Account {
    id?: number;
}


export abstract class AccountData {
    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Account>>;
    abstract create(item: Account): Observable<Account>;
    abstract update(item: Account): Observable<Account>;
    abstract get(id: number): Observable<Account>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;
}