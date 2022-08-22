import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface ObjectType {
    id: number;
    header: string;
    description: string;
    money: number;
    slop:number;
    shift:number;
    isSpecific:boolean;
    isChecked: boolean
}

export abstract class ObjectTypeData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<ObjectType>>;
    abstract getById(id: number): Observable<ObjectType>;
    abstract create(ObjectList: ObjectType): Observable<ObjectType>;
    abstract update(ObjectList: ObjectType): Observable<ObjectType>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}