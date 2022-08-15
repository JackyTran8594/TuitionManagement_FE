import { NgModule } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../auth/_helper/jwt-interceptor.service';
import { ComponentModule } from '../@component/component.module';
import { CoreModule } from '../@core/core.module';

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
