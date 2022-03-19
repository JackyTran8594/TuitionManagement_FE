import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private readonly apiController: string = 'authenticate'

  constructor() { }
}
