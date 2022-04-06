import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGroupComponent } from './role-group.component';

const routes: Routes = [
  { path: '', component: RoleGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleGroupRoutingModule { }
