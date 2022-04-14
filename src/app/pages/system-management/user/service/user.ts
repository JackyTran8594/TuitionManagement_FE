import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface User {
    id?: number;
    login?: string;
    usertype?: number;
    password?: string;
    passwordCheck?: string;
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
    authorities?: number[];
    accounts?: number[];
    functions?: number[];
}

export abstract class UserData {

    // abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>>;

    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<User[]>;
    abstract create(item: User): Observable<User>;
    abstract update(item: User): Observable<User>;
    abstract get(id: number): Observable<User>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;
    abstract getByUsername(username: string): Observable<User>

}

