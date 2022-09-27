import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbIconModule, NbMenuModule, NbTimepickerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { CommonService } from '../common/service/common.service';
import { UserService } from './system-management/user/service/user.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule.forRoot(),
    NbMenuModule,
    NbIconModule,
    NbCheckboxModule,
    NbCardModule,
    FormsModule,
    SharedModule,
    NbDateFnsDateModule.forRoot({
      parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
      formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }
    }),
    NbTimepickerModule.forRoot()
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    CommonService,
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true,
    // },
    {
      provide: APP_INITIALIZER, useFactory: initializeAppFactory, deps: [UserService], multi: true
    }
  ]
})
export class PagesModule {
}

// initing function (doing something with logic) before loading app
export function initializeAppFactory(userService: UserService) {
  // return () => userService.getUserInfo();
  return userService.getUserInfo()

}

