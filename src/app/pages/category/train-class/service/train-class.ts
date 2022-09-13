import { Observable } from "rxjs";
import { ResponseData } from "../../../../shared/responseData";
import { TableData } from "../../../../shared/table-data";

export interface TrainClass {
    id?: number;
    header: string;
    description: string;
    money: number;
    status?: string
    isChecked?: boolean
}

export abstract class TrainClassData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<TrainClass>>;
    abstract getById(id: number): Observable<ResponseData<TrainClass>>;
    abstract create(TrainClass: TrainClass): Observable<ResponseData<TrainClass>>;
    abstract update(TrainClass: TrainClass): Observable<ResponseData<TrainClass>>;
    abstract delete(id: number): Observable<ResponseData<Boolean>>;
    abstract deleteList(listId: number[]): Observable<ResponseData<Boolean>>;
    abstract getAll() : Observable<ResponseData<TrainClass>>;
}