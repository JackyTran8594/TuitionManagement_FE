import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

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
      path: 'user-management/user',
      loadChildren: () => import('./user-management/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'user-management/role-group',
      loadChildren: () => import('./user-management/role-group/role-group.module').then(m => m.RoleGroupModule)
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
