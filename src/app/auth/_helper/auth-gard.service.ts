import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  constructor(private router: Router, private authService: AuthService) { }
}
