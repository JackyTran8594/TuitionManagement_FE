import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getDeepFromObject, NbAuthService, NbAuthSocialLink, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Subject } from 'rxjs';
import { IUser } from '../service/auth';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(protected service: AuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    private formBuilder: FormBuilder,
    protected router: Router) {

  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    const usernameValidators = [];
    this.isUsernameRequired && usernameValidators.push(Validators.required)

    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ]
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control("", [...usernameValidators]),
      password: this.formBuilder.control("", [...passwordValidators]),
      rememberMe: this.formBuilder.control(false)
    })

  }

  private destroy$: Subject<void> = new Subject<void>();
  minLength: number = this.getConfigValue("forms.validation.password.minLength");
  maxLength: number = this.getConfigValue("forms.validation.password.maxlength");
  redirectDelay: number = this.getConfigValue("forms.login.redirectDelay");
  rememberMe = this.getConfigValue("forms.login.rememberMe");
  isUsernameRequired: boolean = this.getConfigValue("forms.validation.username.required");
  isPasswordRequired: boolean = this.getConfigValue("forms.validation.password.required");

  submitted: boolean = false;

  loginForm: FormGroup;

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  login(): void {
    let user: IUser = this.loginForm.value;
    this.service.authenticate(user)
  }


}
