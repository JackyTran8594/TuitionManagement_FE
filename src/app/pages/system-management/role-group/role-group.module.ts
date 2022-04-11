import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleGroupRoutingModule } from './role-group-routing.module';
import { RoleGroupFrmComponent } from './role-group-frm/role-group-frm.component';
import { RoleGroupComponent } from './role-group.component';
import { NbCardModule, NbIconModule, NbButtonModule, NbInputModule, NbSelectModule, NbOptionModule, NbActionsModule, NbCheckboxModule, NbDialogModule } from '@nebular/theme';
import { RoleGroupApi } from './service/role-group.api';
import { RoleGroupData } from './service/role-group';
import { RoleGroupService } from './service/role-group.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { TreeModule } from '@circlon/angular-tree-component';

const NB_MODULES = [
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbOptionModule,
  NbActionsModule,
  NbCheckboxModule,
  // NbDialogModule.forChild(),
]

const API = [RoleGroupApi]

@NgModule({
  declarations: [
    RoleGroupComponent,
    RoleGroupFrmComponent
  ],
  imports: [
    CommonModule,
    RoleGroupRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
    TreeModule,
    NB_MODULES
  ],
  providers: [
    {
      provide: RoleGroupData, useClass: RoleGroupService
    },
    [...API]
  ]
})
export class RoleGroupModule { }
