import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountFrmComponent } from './account-frm/account-frm.component';
import { NbCardModule, NbIconModule, NbButtonModule, NbInputModule, NbSelectModule, NbOptionModule, NbActionsModule, NbCheckboxModule, NbFormFieldModule } from '@nebular/theme';
import { SharedModule } from '../../../shared/shared.module';

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



@NgModule({
  declarations: [
    AccountComponent,
    AccountFrmComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
