import { NumberValueAccessor } from "@angular/forms";
import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export class RoleGroup {
    id?: number;
    roleID?:number;
    description?:string;
    ofTw?:boolean;
    ofTinh?: boolean;
    ofHuyen?: boolean;
    lastUpdateTime?: number;
    creationTime?: number;
    isChecked?: boolean;
    functionals? : any;
    
    constructor() {
        this.id = 0;
        this.roleID = 0;
        this.description = '';
        this.ofTw = false;
        this.ofTinh = false;
        this.ofHuyen= false;
        this.lastUpdateTime = 0;
        this.creationTime = 0;
        this.functionals = [];
    }
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