import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbDatepickerModule, NbDialogModule, NbSpinnerModule, NbAutocompleteModule, NbAccordionModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentModule } from '../../@component/component.module';
import { SharedModule } from '../../shared/shared.module';
import { ReportApi } from './service/report.api';
import { ReportData } from './service/report';
import { ReportService } from './service/report.service';
import { NbDateFnsDateModule } from '@nebular/date-fns';

const NB_MODULES = [
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbRadioModule,
  NbSelectModule,
  NbIconModule,
  NbDatepickerModule,
  NbInputModule,
  NbDialogModule.forChild(),
  NbTabsetModule,
  NbSpinnerModule,
  NbAutocompleteModule,
  NbAccordionModule,
  NbDateFnsDateModule.forChild({
    parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
    formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
  })
]

const API = [ReportApi];
const SERVICE = [
  {
    provide: ReportData, useClass: ReportService
}
]


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ...NB_MODULES,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentModule,
    NgxPaginationModule,
  ]
})
export class ReportModule {
   static forRoot(): ModuleWithProviders<ReportModule> { 
    return {
      ngModule: ReportModule,
      providers: [
        ...API, ...SERVICE
      ]
    }
  }
 }
