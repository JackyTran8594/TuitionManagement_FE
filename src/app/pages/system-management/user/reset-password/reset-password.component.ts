import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../service/user';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router, private service: UserData) { }

  ngOnInit(): void {
  }

  goUserProfile() {
    this.router.navigate(['/pages/user/profile'])
  }

}
