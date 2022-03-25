import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NbCardModule } from '@nebular/theme';
import { ValidationMessageComponent } from './validation-message/validation-message.component';



@NgModule({
  declarations: [NotFoundComponent, ValidationMessageComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [NotFoundComponent, ValidationMessageComponent]
})
export class SharedModule { }
