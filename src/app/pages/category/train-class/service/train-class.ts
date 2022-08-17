import { Observable } from "rxjs";
import { TableData } from "../../../../shared/table-data";

export interface TrainClass {
    id: number;
    header: string;
    description: string;
    money: number;
    status?: string
    isChecked?: boolean
}

export abstract class TrainClassData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<TrainClass>>;
    abstract getById(id: number): Observable<TrainClass>;
    abstract create(TrainClass: TrainClass): Observable<TrainClass>;
    abstract update(TrainClass: TrainClass): Observable<TrainClass>;
    abstract delete(id: number): Observable<boolean>;
    abstract deleteList(listId: number[]): Observable<boolean>;
}