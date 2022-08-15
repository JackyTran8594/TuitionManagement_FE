import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../auth/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },

    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'device',
      loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
    },
    {
      path: 'system-management/user',
      loadChildren: () => import('./system-management/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'system-management/role-group',
      loadChildren: () => import('./system-management/role-group/role-group.module').then(m => m.RoleGroupModule)
    },
    {
      path: 'system-management/accounts',
      loadChildren: () => import('./system-management/account/account.module').then(m => m.AccountModule)
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    },
    {
      path: 'fee',
      loadChildren: () => import('./fee/fee.module').then(m => m.FeeModule)
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
