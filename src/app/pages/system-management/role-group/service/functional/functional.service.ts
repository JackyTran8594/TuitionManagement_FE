import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Functional, FunctionalData } from './functional';
import { FunctionalApi } from './functional.api';

@Injectable()
export class FunctionalService implements FunctionalData {

  constructor(private api: FunctionalApi) { }

  getFunctional(): Observable<Functional[]> {
    return this.api.getAll();
  }
}
