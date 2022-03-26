import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/http.service';
import { TableData } from '../../../shared/table-data';
import { Device } from './device';

@Injectable()
export class DeviceApi {

  private readonly apiController: string = 'device'

  constructor(private http: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Device>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      .set('txtSearch', txtSearch);

    return this.http.get(this.apiController, { params });
  }

  getById(id: number): Observable<Device> {
    return this.http.get(`${this.apiController}/${id}`);
  }

  create(device: Device): Observable<Device> {
    return this.http.post(this.apiController, device);
  }

  update(device: Device): Observable<Device> {
    return this.http.put(`${this.apiController}/${device.id}`, device);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiController}/${id}`);
  }

  deleteList(id: number[]): Observable<boolean> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiController}`, { params })
  }

}
