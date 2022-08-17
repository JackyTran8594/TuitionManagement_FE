import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface ObjectList {
    id: number;
    header: string;
    description: string;
    money: number;
    slop:number;
    shift:number;
    isSpecific:boolean;
    isChecked: boolean
}

export abstract class ObjectListData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<ObjectList>>;
    abstract getById(id: number): Observable<ObjectList>;
    abstract create(ObjectList: ObjectList): Observable<ObjectList>;
    abstract update(ObjectList: ObjectList): Observable<ObjectList>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}