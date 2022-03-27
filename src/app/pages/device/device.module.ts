import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceFrmComponent } from './device-frm/device-frm.component';
import { SharedModule } from '../../shared/shared.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DeviceData } from './service/device';
import { DeviceComponent } from './device.component';
import { DeviceService } from './service/device.service';
import { DeviceApi } from './service/device.api';

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
  NbDialogModule.forChild(),
]

const API = [DeviceApi]
const SERVICES = [{ provide: DeviceData, useClass: DeviceService }]

@NgModule({
  declarations: [
    DeviceFrmComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    ...NB_MODULES,
    SharedModule
  ],
  providers: [
    ...API,
    ...SERVICES
  ]
})
export class DeviceModule {
  
 }
