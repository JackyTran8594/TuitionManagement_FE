import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectListRoutingModule } from './object-list-routing.module';
import { ObjectListComponent } from './object-list/object-list.component';
import { ObjectListFrmComponent } from './object-list-frm/object-list-frm.component';


@NgModule({
  declarations: [
    ObjectListComponent,
    ObjectListFrmComponent
  ],
  imports: [
    CommonModule,
    ObjectListRoutingModule
  ]
})
export class ObjectListModule { }
