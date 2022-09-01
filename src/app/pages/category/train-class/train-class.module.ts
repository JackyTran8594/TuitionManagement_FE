import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainClassRoutingModule } from './train-class-routing.module';
import { TrainClassComponent } from './train-class.component';
import { TrainClassFrmComponent } from './train-class-frm/train-class-frm.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { TrainClassData } from './service/train-class';
import { TrainClassApi } from './service/train-class.api';
import { TrainClassService } from './service/train-class.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../../@component/component.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

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

const API = [TrainClassApi]
const SERVICES = [{ provide: TrainClassData, useClass: TrainClassService }]

@NgModule({
  declarations: [
    TrainClassComponent,
    TrainClassFrmComponent
  ],
  imports: [
    CommonModule,
    TrainClassRoutingModule,
    ...NB_MODULES,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class TrainClassModule {
  static forRoot(): ModuleWithProviders<TrainClassModule> {
    return {
      ngModule: TrainClassModule,
      providers: [
        ...API,
        ...SERVICES
      ]
    }
  }
}
