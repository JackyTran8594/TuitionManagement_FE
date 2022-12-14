import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { SharedModule } from '../../../shared/shared.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbOptionModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserData } from './service/user';
import { UserService } from './service/user.service';
import { UserApi } from './service/user.api';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const NB_MODULES = [
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbOptionModule,
  NbActionsModule,
  NbCheckboxModule,
  NbFormFieldModule,
]

const API = [UserApi]
const SERVICES = [{
  provide: UserData, useClass: UserService
}]

@NgModule({
  declarations: [UserComponent, UserFrmComponent, UserProfileComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    NB_MODULES,
  ],
  providers: [

  ]
})
export class UserModule {
  static forRoot(): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        ...API,
        ...SERVICES
      ]
    }
  }
}
