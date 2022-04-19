import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NbTokenLocalStorage } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { AccessToken } from '../../../../auth/service/auth';
import { User, UserData } from '../service/user';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit, OnChanges {

  showPassword: boolean = false;

  item: User = {}

  constructor(private router: Router, private service: UserData, private toastr: NbToastrService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    let helper = new JwtHelperService();
    let accessToken = <AccessToken>JSON.parse(localStorage.getItem('access_token'));
    let userObject = helper.decodeToken(accessToken.id_token);
    console.log(userObject);
    this.getByUsername(userObject.sub);
  }

  getByUsername(usernam: string) {
    this.service.getByUsername(usernam).subscribe(res => {
      console.log(res);
      this.item = res;
    }, err => {
      console.log(err);
    });
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  editPass() {
    this.showPassword = !this.showPassword;
  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }

  onCheckPassword(item) {
    console.log(item);
    if (this.item.password == item) {
      return true;
    }
    return false;
  }

  save() {
    this.service.update(this.item).subscribe(res => {
      if (res) {
        this.toastr.show("Chỉnh sửa thông tin thành công", "", {
          status: "success",
          destroyByClick: true,
          duration: 2000,
        });

        this.getByUsername(this.item.login);

      };
    })
  }

}
