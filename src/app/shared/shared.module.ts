import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { DeleteComponent } from './delete/delete.component';

const NB_MODULES = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbInputModule,
  NbCheckboxModule
]

@NgModule({
  declarations: [NotFoundComponent, ValidationMessageComponent, DeleteComponent],
  imports: [
    CommonModule,
    NB_MODULES
  ],
  exports: [NotFoundComponent, ValidationMessageComponent]
})
export class SharedModule { }
