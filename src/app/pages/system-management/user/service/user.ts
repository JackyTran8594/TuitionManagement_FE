import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface User {
    id?: number;
    login?: string;
    usertype?: number;
    passwordhash?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    activated?: string;
    langkey?: string;
    activationkey?: string;
    resetkey?: string;
    creationTime?: Date;
    resetdate?: Date;
    lastUpdateTime?: Date;
    isChecked?: Boolean;
}

export abstract class UserData {

    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>>;
    abstract create(item: User): Observable<User>;
    abstract update(item: User): Observable<User>;
    abstract get(id: number): Observable<User>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;

}

