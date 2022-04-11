import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ValidationMessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ValidationMessageComponent]
})
export class ComponentModule { }
