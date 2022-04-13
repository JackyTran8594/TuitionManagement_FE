import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountFrmComponent } from './account-frm/account-frm.component';
import { NbCardModule, NbIconModule, NbButtonModule, NbInputModule, NbSelectModule, NbOptionModule, NbActionsModule, NbCheckboxModule, NbFormFieldModule } from '@nebular/theme';
import { SharedModule } from '../../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AccountData } from './service/account';
import { AccountService } from './service/account.service';
import { AccountApi } from './service/account.api';

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

const API = [AccountApi]
const SERVICES = [{
  provide: AccountData, useClass: AccountService
}]

@NgModule({
  declarations: [
    AccountComponent,
    AccountFrmComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
    NB_MODULES
  ],
  providers:[
    ...API,
    ...SERVICES
  ]
})
export class AccountModule { }
