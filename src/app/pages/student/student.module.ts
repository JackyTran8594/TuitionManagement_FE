import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentFrmComponent } from './student-frm/student-frm.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbCheckboxModule, NbFormFieldModule, NbDialogModule } from '@nebular/theme';
import { StudentData } from './service/student';
import { StudentApi } from './service/student.api';
import { StudentService } from './service/student.service';
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

const API = [StudentApi]
const SERVICES = [{ provide: StudentData, useClass: StudentService }]


@NgModule({
  declarations: [
    StudentComponent,
    StudentFrmComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...NB_MODULES,
    SharedModule,
    ComponentModule,
    StudentRoutingModule
  ],
  providers: [

  ]
})
export class StudentModule {
  static forRoot(): ModuleWithProviders<StudentModule> {
    return {
      ngModule: StudentModule,
      providers: [
        ...API, ...SERVICES
      ]
    }
  }
}
