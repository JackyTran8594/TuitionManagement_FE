import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountFrmComponent } from './account-frm/account-frm.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountFrmComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
