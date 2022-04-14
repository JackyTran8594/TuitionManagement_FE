import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../../../../shared/table-data';
import { Functional, FunctionalData } from './functional';
import { FunctionalApi } from './functional.api';

@Injectable()
export class FunctionalService implements FunctionalData {

  constructor(private api: FunctionalApi) { }

  getFunctional(): Observable<TableData<Functional>> {
    return this.api.getAll();
  }
}
