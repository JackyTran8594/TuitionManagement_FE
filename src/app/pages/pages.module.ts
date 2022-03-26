import { NgModule } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbIconModule,
    NbCheckboxModule,
    // NbDialogModule.forChild(),
    NbCardModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
