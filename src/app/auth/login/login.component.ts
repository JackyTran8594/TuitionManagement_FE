import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getDeepFromObject, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Subject } from 'rxjs';
import { User } from '../service/auth';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(protected service: AuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    private formBuilder: FormBuilder,
    protected router: Router) {

  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    const usernameValidators = [];
    this.isUsernameRequired && usernameValidators.push(Validators.required)

    const passwordValidators = [
      // Validators.minLength(this.minLength),
      // Validators.maxLength(this.maxLength)
    ]
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control("", [...usernameValidators]),
      password: this.formBuilder.control("", [...passwordValidators]),
      rememberMe: this.formBuilder.control(false)
    })

  }

  private destroy$: Subject<void> = new Subject<void>();
  // minLength: number = this.getConfigValue("forms.validation.password.minLength");
  // maxLength: number = this.getConfigValue("forms.validation.password.maxlength");
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
    let user: User = this.loginForm.value;
    this.submitted = true;
    this.service.authenticate(user).subscribe(res => {
      if (res.id_token != null) {
        this.submitted = false;
        console.log("---init access token---");
        console.log(res);
          localStorage.setItem("access_token", JSON.stringify(res));
          setTimeout(() => {
            return this.router.navigate(['pages/dashboard']);
          }, 1000);
          
      }
    })
  }


}
