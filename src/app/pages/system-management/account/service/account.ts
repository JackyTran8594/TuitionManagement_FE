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
    

    constructor() {
        this.id = 0;
        this.unitCode = '';
        this.parentCode = '';
        this.departmentCode = '';
        this.maximumDevices = 0;
        this.isActive = 1;
        this.displayName = '';
        this.isChecked = false;
    }
}

export class RequestDTO {
    account?: Account;
    autoExtendCreate: boolean;

    constructor() {
        this.autoExtendCreate = false;
    }
}

export abstract class AccountData {
    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Account>>;
    abstract create(item: RequestDTO): Observable<Account>;
    abstract update(item: Account): Observable<Account>;
    abstract get(id: number): Observable<Account>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;
}