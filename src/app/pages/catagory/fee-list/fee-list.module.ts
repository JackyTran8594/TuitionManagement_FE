import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeListRoutingModule } from './fee-list-routing.module';
import { FeeListComponent } from './fee-list/fee-list.component';
import { FeeListFrmComponent } from './fee-list-frm/fee-list-frm.component';


@NgModule({
  declarations: [
    FeeListComponent,
    FeeListFrmComponent
  ],
  imports: [
    CommonModule,
    FeeListRoutingModule
  ]
})
export class FeeListModule { }
