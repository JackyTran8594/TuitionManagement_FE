import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeListRoutingModule } from './fee-list-routing.module';
import { FeeListFrmComponent } from './fee-list-frm/fee-list-frm.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { FeeListData } from './service/fee';
import { FeeListApi } from './service/fee-list.api';
import { FeeListService } from './service/fee-list.service';
import { FeeListComponent } from './fee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentModule } from '../../../@component/component.module';

const NB_MODULES = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbDatepickerModule,
  NbInputModule,
  NbCheckboxModule,
  NbFormFieldModule,
  NbDialogModule.forChild(),
]

const API = [FeeListApi]
const SERVICES = [{ provide: FeeListData, useClass: FeeListService }]

@NgModule({
  declarations: [
    FeeListComponent,
    FeeListFrmComponent
  ],
  imports: [
    CommonModule,
    FeeListRoutingModule,
    ...NB_MODULES,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentModule

  ]
})
export class FeeListModule {
  static forRoot(): ModuleWithProviders<FeeListModule> {
    return {
      ngModule: FeeListModule,
      providers: [
        ...API,
        ...SERVICES
      ]
    }
  }
}
