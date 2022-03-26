import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth/_helper/auth-guard.service';

export const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: 'pages',
    pathMatch: 'full'
  },
];

const config: ExtraOptions = {
  useHash: false,
  relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
