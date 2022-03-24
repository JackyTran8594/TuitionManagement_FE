import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [NotFoundComponent]
})
export class SharedModule { }
