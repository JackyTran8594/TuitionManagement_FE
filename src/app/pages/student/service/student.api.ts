import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/http.service';
import { ResponseData } from '../../../shared/responseData';
import { TableData } from '../../../shared/table-data';
import { Student } from './student';

@Injectable()
export class StudentApi {

  private readonly apiController: string = 'student'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Student>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
    // .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<ResponseData<Student>> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(Student: Student): Observable<ResponseData<Student>> {
    return this.http.post(this.apiController, Student);
  }

  update(Student: Student): Observable<ResponseData<Student>> {
    return this.http.put(`${this.apiController}/${Student.id}`, Student);
  }

  delete(id: number): Observable<ResponseData<Boolean>> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(listId: number[]): Observable<ResponseData<Boolean>> {
    return this.http.post(`${this.apiController}/deleteAll`, listId)
  }

}
