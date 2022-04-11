import { Observable } from "rxjs";

export interface Functional {
    id?: number;
    funcID?:number;
    unitCode?:string;
    parentCode?:string;
    description?: string;
    ofTw?:boolean;
    ofProvince?: boolean;
    ofDistrict?: boolean;
    target?:string;
    lastUpdateTime?: number;
    creationTime?: number;
    isChecked?: boolean;
}

export abstract class FunctionalData {
    abstract getFunctional(): Observable<Functional[]>;
}