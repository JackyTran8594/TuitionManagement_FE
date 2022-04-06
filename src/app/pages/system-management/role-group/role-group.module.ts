import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleGroupRoutingModule } from './role-group-routing.module';
import { RoleGroupFrmComponent } from './role-group-frm/role-group-frm.component';
import { RoleGroupComponent } from './role-group.component';


@NgModule({
  declarations: [
    RoleGroupComponent,
    RoleGroupFrmComponent
  ],
  imports: [
    CommonModule,
    RoleGroupRoutingModule
  ]
})
export class RoleGroupModule { }
