import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TableData } from "../../../shared/table-data";
import { DeviceModule } from "../device.module";

export interface Device {
    id?: number,
    deviceID?: number
    accountID?: number,
    registerID?: string,
    serialNumber?: string,
    imeiNumber?: string,
    displayName?: string,
    lastUpdateTime?: number,
    creationTime?: number,
    vehicleID?: string,
    userID?: number,
    simID?: string,
    status?: number
    isChecked?: boolean
}

export abstract class DeviceData {
     abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Device>>;
     abstract getById(id: number): Observable<Device>;
     abstract create(device: Device): Observable<Device>;
     abstract update(device: Device): Observable<Device>;
     abstract delete(id: number): Observable<boolean>;
     abstract deleteList(listId: number[]): Observable<boolean>;
}