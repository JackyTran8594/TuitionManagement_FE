import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from './login/login.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './_helper/auth-guard.service';
import { NbSecurityModule } from '@nebular/security';
import { NbTokenLocalStorage } from '@nebular/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_helper/auth-interceptor.service';
import { AuthBlockComponent } from './auth-block/auth-block.component';


const GUARDS = [AuthGuardService]

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

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    AuthBlockComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NB_MODULES,
    SharedModule
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
          provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
        },
        ...GUARDS
      ]
    }

  }
}
