import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectTypeComponent } from './object-type.component';

const routes: Routes = [
  {
    path: '',
    component: ObjectTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectTypeRoutingModule { }
