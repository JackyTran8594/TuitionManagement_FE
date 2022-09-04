import { NgModule } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbMenuModule, NbTimepickerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../auth/_helper/jwt-interceptor.service';
import { ComponentModule } from '../@component/component.module';
import { CoreModule } from '../@core/core.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    NbCheckboxModule,
    NbCardModule,
    FormsModule,
    SharedModule,
    NbDateFnsDateModule.forRoot({
      parseOptions: {  useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
      formatOptions: {  useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }
    }),
    NbTimepickerModule.forRoot()
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true,
    // },
  ]
})
export class PagesModule {
}
