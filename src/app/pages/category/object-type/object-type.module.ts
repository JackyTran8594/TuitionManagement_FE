import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectTypeComponent } from './object-type.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { ObjectTypeData } from './service/object-type';
import { ObjectTypeApi } from './service/object-type.api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentModule } from '../../../@component/component.module';
import { ObjectTypeFrmComponent } from './object-type-frm/object-type-frm.component';
import { ObjectTypeRoutingModule } from './object-type-routing.module';
import { ObjectTypeService } from './service/object-type.service';

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

const API = [ObjectTypeApi]
const SERVICES = [{ provide: ObjectTypeData, useClass: ObjectTypeService }]

@NgModule({
  declarations: [
    ObjectTypeComponent,
    ObjectTypeFrmComponent
  ],
  imports: [
    CommonModule,
    ObjectTypeRoutingModule,
    ...NB_MODULES,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentModule
  ]
})
export class ObjectTypeModule {
  static forRoot(): ModuleWithProviders<ObjectTypeModule> { 
    return {
      ngModule: ObjectTypeModule,
      providers: [
        ...API,
        ...SERVICES
      ]
    }
  }
 }
