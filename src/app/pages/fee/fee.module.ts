import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeRoutingModule } from './fee-routing.module';
import { FeeFrmComponent } from './fee-frm/fee-frm.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule } from '@nebular/theme';
import { FeeComponent } from './fee.component';
import { FeeData } from './service/fee';
import { FeeApi } from './service/fee.api';
import { FeeService } from './service/fee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ComponentModule } from '../../@component/component.module';


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

const API = [FeeApi]
const SERVICES = [{ provide: FeeData, useClass: FeeService }]


@NgModule({
  declarations: [
    FeeComponent,
    FeeFrmComponent
  ],
  imports: [
    CommonModule,
    FeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...NB_MODULES,
    SharedModule,
    ComponentModule
  ],
  providers: [
    ...API, ...SERVICES
  ]
})
export class FeeModule { }
