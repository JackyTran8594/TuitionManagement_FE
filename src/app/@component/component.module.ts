import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { FormsModule } from '@angular/forms';
import { InputSelectApiComponent } from './input-select-api/input-select-api.component';
import { NbSelectModule } from '@nebular/theme';



@NgModule({
  declarations: [ValidationMessageComponent, InputSelectApiComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbSelectModule
  ],
  exports: [ValidationMessageComponent]
})
export class ComponentModule { }
