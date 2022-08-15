import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { FunctionalApi } from './service/functional/functional.api';
import { FunctionalData } from './service/functional/functional';
import { FunctionalService } from './service/functional/functional.service';

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

const API = [RoleGroupApi, FunctionalApi]
const SERVICES = [
  {
    provide: RoleGroupData, useClass: RoleGroupService
  },
  {
    provide: FunctionalData, useClass: FunctionalService
  },
]

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

  ]
})
export class RoleGroupModule {
  static forRoot(): ModuleWithProviders<RoleGroupModule> {
    return {
      ngModule: RoleGroupModule,
      providers: [
        ...SERVICES,
        ...API
      ]
    }
  }
}
