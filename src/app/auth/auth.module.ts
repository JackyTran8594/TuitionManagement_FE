import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from './login/login.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './_helper/auth-guard.service';
import { NbTokenLocalStorage, NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
import { HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_helper/auth-interceptor.service';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentModule } from '../@component/component.module';
import { HttpService } from '../shared/http.service';
import { JwtInterceptorService } from './_helper/jwt-interceptor.service';
import { AuthApi } from './service/auth.api';
import { AuthService } from './service/auth.service';
import { LogoutComponent } from './logout/logout.component';


const GUARDS = [AuthGuardService]
const SERVICES = [AuthService, HttpService]
const API = [AuthApi]

const NB_MODULES = [
  NbIconModule,
  NbLayoutModule,
  NbCardModule,
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
  NbFormFieldModule
]

export function filterInterceptorRequest(req: HttpRequest<any>): boolean {
  return ['/auth/login', '/auth/sign-up', '/auth/request-pass', '/auth/refresh-token'].some(url => req.url.includes(url));
}

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    AuthBlockComponent,
    NotFoundComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NB_MODULES,
    ComponentModule
  ],
  providers: [
    {
      provide: NbTokenLocalStorage, useClass: NbTokenLocalStorage,
    }
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
        },
       
        ...GUARDS,
        ...SERVICES,
        ...API
      ]
    }

  }
}
