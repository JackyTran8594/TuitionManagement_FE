import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuitionRoutingModule } from './tuition-routing.module';
import { TuitionComponent } from './tuition.component';
import { TuitionFrmComponent } from './tuition-frm/tuition-frm.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { TuitionData } from './service/tuition';
import { TuitionApi } from './service/tuition.api';
import { TuitionService } from './service/tuition.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentModule } from '../../@component/component.module';
import { SharedModule } from '../../shared/shared.module';

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

const API = [TuitionApi]
const SERVICES = [{ provide: TuitionData, useClass: TuitionService }]

@NgModule({
  declarations: [
    TuitionComponent,
    TuitionFrmComponent
  ],
  imports: [
    CommonModule,
    TuitionRoutingModule,
    ...NB_MODULES,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    SharedModule
  ]
})
export class TuitionModule {
  static forRoot(): ModuleWithProviders<TuitionModule> {
    return {
      ngModule: TuitionModule,
      providers:[
        ...API,
        ...SERVICES
      ]
    }
  }
 }
