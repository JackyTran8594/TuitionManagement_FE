import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";
import { ResponseData } from "../../../../shared/responseData";

export interface ObjectType {
    id?: number;
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
    abstract getById(id: number): Observable<ResponseData<ObjectType>>;
    abstract create(ObjectList: ObjectType): Observable<ResponseData<ObjectType>>;
    abstract update(ObjectList: ObjectType): Observable<ResponseData<ObjectType>>;
    abstract delete(id: number): Observable<ResponseData<Boolean>>;
    abstract deleteList(listId: number[]): Observable<ResponseData<Boolean>>;
}