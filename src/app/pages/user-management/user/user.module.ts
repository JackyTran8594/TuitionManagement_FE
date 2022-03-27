import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { SharedModule } from '../../../shared/shared.module';




@NgModule({
  declarations: [UserComponent, UserFrmComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
