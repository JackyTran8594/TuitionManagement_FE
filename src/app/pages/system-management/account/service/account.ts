import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export class Account {
    id?: number;
    unitCode?: string;
    parentCode?: string;
    departmentCode?: string;
    maximumDevices?: number;
    isActive?: number;
    displayName?: string;
    creationTime?: number;
    lastUpdateTime?: number;
    isChecked?: boolean;
    autoExtendCreate?: boolean;

    constructor() {
        this.autoExtendCreate = true;
        this.isChecked = false;
    }
}

export abstract class AccountData {
    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Account>>;
    abstract create(item: Account): Observable<Account>;
    abstract update(item: Account): Observable<Account>;
    abstract get(id: number): Observable<Account>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;
}