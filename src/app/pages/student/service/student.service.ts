import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../../../shared/responseData';
import { TableData } from '../../../shared/table-data';

import { Student, StudentData } from './student';
import { StudentApi } from './student.api';

@Injectable()
export class StudentService implements StudentData {

  constructor(private api: StudentApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Student>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<ResponseData<Student>> {
    return this.api.getById(id);
  }

  create(Student: Student): Observable<ResponseData<Student>> {
    return this.api.create(Student);
  }

  update(Student: Student): Observable<ResponseData<Student>> {
    return this.api.update(Student);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.api.deleteList(listId);
  }
}
