import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectListComponent } from './object-list.component';

const routes: Routes = [
  {
    path: '',
    component: ObjectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectListRoutingModule { }
