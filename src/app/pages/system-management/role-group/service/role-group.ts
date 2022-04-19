import { NumberValueAccessor } from "@angular/forms";
import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface RoleGroup {
    id?: number;
    roleID?:number;
    description?:string;
    ofTw?:boolean;
    ofProvince?: boolean;
    ofDistrict?: boolean;
    lastUpdateTime?: number;
    creationTime?: number;
    isChecked?: boolean;
    functionals? : any;
}


export abstract class RoleGroupData {

    abstract list(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<RoleGroup>>;
    abstract create(item: RoleGroup): Observable<RoleGroup>;
    abstract update(item: RoleGroup): Observable<RoleGroup>;
    abstract get(id: number): Observable<RoleGroup>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteAll(ids: number[]): Observable<boolean>;
    abstract getAll(): Observable<RoleGroup[]>;
    
}