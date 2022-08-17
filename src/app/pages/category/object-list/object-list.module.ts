import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectListRoutingModule } from './object-list-routing.module';
import { ObjectListComponent } from './object-list.component';
import { ObjectListFrmComponent } from './object-list-frm/object-list-frm.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { ObjectListData } from './service/object-list';
import { ObjectListApi } from './service/object-list.api';
import { ObjectListService } from './service/object-list.service';
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

const API = [ObjectListApi]
const SERVICES = [{ provide: ObjectListData, useClass: ObjectListService }]

@NgModule({
  declarations: [
    ObjectListComponent,
    ObjectListFrmComponent
  ],
  imports: [
    CommonModule,
    ObjectListRoutingModule,
    ...NB_MODULES,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentModule
  ]
})
export class ObjectListModule {
  static forRoot(): ModuleWithProviders<ObjectListModule> { 
    return {
      ngModule: ObjectListModule,
      providers: [
        ...API,
        ...SERVICES
      ]
    }
  }
 }
