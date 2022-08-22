import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../shared/table-data';
import { ObjectType, ObjectTypeData } from './object-type';
import { ObjectTypeApi } from './object-type.api';

@Injectable()
export class ObjectTypeService implements ObjectTypeData {

  constructor(private api: ObjectTypeApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<ObjectType>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<ObjectType> {
    return this.api.getById(id);
  }

  create(ObjectType: ObjectType): Observable<ObjectType> {
    return this.api.create(ObjectType);
  }

  update(ObjectType: ObjectType): Observable<ObjectType> {
    return this.api.update(ObjectType);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
