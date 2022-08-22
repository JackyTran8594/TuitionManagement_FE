import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';

import { RippleService } from './utils/ripple.service';
import { MockDataModule } from './mock/mock-data.module';
import { FeeModule } from '../pages/fee/fee.module';
import { StudentModule } from '../pages/student/student.module';
import { RoleGroupModule } from '../pages/system-management/role-group/role-group.module';
import { UserModule } from '../pages/system-management/user/user.module';
import { FeeListModule } from '../pages/category/fee-list/fee-list.module';
import { TrainClassModule } from '../pages/category/train-class/train-class.module';
import { TuitionModule } from '../pages/tuition/tuition.module';
import { AuthModule } from '../auth/auth.module';
import { ObjectTypeModule } from '../pages/category/object-list/object-type.module';

const DATA_SERVICES = [

  { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: RippleService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...FeeModule.forRoot().providers,
  ...StudentModule.forRoot().providers,
  // ...UserModule.forRoot().providers,
  ...RoleGroupModule.forRoot().providers,
  ...FeeListModule.forRoot().providers,
  ...ObjectTypeModule.forRoot().providers,
  ...TrainClassModule.forRoot().providers,
  ...TuitionModule.forRoot().providers,
  ...AuthModule.forRoot().providers,
  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }

}
