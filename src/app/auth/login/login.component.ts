import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getDeepFromObject, NbAuthService, NbAuthSocialLink, NbLoginComponent } from '@nebular/auth';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  

  

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private destroy$: Subject<void> = new Subject<void>();
  minLength: number = this.getConfigValue("forms.validation.password.minLength");
  maxlength: number = this.getConfigValue("forms.validation.password.maxlength");
  redirectDelay: number = this.getConfigValue("forms.login.redirectDelay");
  rememberMe = this.getConfigValue("forms.login.rememberMe");
  isUsernameRequired: boolean = this.getConfigValue("forms.validation.username.required");
  usPasswordRequired: boolean = this.getConfigValue("forms.validation.password.required");

  submitted: boolean = false;

  loginForm: FormGroup;

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  getConfigValue(key:string): any {
    return getDeepFromObject(this.options, key, null);
  }


}
