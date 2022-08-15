import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../shared/table-data';
import { Student, StudentData } from './student';
import { StudentApi } from './student.api';

@Injectable()
export class StudentService implements StudentData {

  constructor(private api: StudentApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Student>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  getById(id: number): Observable<Student> {
    return this.api.getById(id);
  }

  create(Student: Student): Observable<Student> {
    return this.api.create(Student);
  }

  update(Student: Student): Observable<Student> {
    return this.api.update(Student);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }

  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
