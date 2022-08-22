import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from '../auth/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
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
      path: 'student',
      loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    },
    {
      path: 'fee',
      loadChildren: () => import('./fee/fee.module').then(m => m.FeeModule)
    },
    {
      path: 'category/fee-list',
      loadChildren: () => import('./category/fee-list/fee-list.module').then(m => m.FeeListModule)
    },
    {
      path: 'category/object-list',
      loadChildren: () => import('./category/object-type/object-type.module').then(m => m.ObjectTypeModule)
    },
    {
      path: 'category/train-class',
      loadChildren: () => import('./category/train-class/train-class.module').then(m => m.TrainClassModule)
    },
    {
      path: '',
      redirectTo: 'student',
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
