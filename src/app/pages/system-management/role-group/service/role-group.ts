import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface RoleGroup {
    id?: number;
}


export abstract class RoleGroupData {

    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<RoleGroup>>;
    abstract create(item: RoleGroup): Observable<RoleGroup>;
    abstract update(item: RoleGroup): Observable<RoleGroup>;
    abstract get(id: number): Observable<RoleGroup>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;
}