import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainClassRoutingModule } from './train-class-routing.module';
import { TrainClassComponent } from './train-class.component';
import { TrainClassFrmComponent } from './train-class-frm/train-class-frm.component';


@NgModule({
  declarations: [
    TrainClassComponent,
    TrainClassFrmComponent
  ],
  imports: [
    CommonModule,
    TrainClassRoutingModule
  ]
})
export class TrainClassModule { }
