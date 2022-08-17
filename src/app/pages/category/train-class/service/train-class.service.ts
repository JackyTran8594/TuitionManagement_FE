import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { TrainClass, TrainClassData } from './train-class';
import { TrainClassApi } from './train-class.api';

@Injectable()
export class TrainClassService implements TrainClassData {

  constructor(private api: TrainClassApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<TrainClass>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<TrainClass> {
    return this.api.getById(id);
  }

  create(TrainClass: TrainClass): Observable<TrainClass> {
    return this.api.create(TrainClass);
  }

  update(TrainClass: TrainClass): Observable<TrainClass> {
    return this.api.update(TrainClass);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
