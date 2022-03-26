import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../shared/table-data';
import { Device, DeviceData } from './device';
import { DeviceApi } from './device.api';

@Injectable()
export class DeviceService implements DeviceData {

  constructor(private api: DeviceApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Device>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }
  getById(id: number): Observable<Device> {
    return this.api.getById(id);
  }
  create(device: Device): Observable<Device> {
    return this.api.create(device);
  }
  update(device: Device): Observable<Device> {
    return this.api.update(device);
  }
  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
  deleteList(listId: number[]): Observable<boolean> {
    return this.api.deleteList(listId);
  }
}
