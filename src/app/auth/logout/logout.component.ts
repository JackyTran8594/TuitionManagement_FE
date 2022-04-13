import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbTokenLocalStorage } from '@nebular/auth';

@Component({
  selector: 'ngx-logout',
  template: ` `,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private localStorage: NbTokenLocalStorage) { }

  ngOnInit(): void {
    this.logOut();
  }

  logOut() {
    this.router.navigate(['/auth/login']);
    // this.localStorage.clear();
    localStorage.removeItem('access_token');
  }

}
