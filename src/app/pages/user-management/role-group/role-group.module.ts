import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleGroupRoutingModule } from './role-group-routing.module';
import { RoleGroupComponent } from './role-group/role-group.component';
import { RoleGroupFrmComponent } from './role-group-frm/role-group-frm.component';


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
