import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadOnlyDirective } from './directives/read-only.directive';

const NB_MODULES = [
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbIconModule,
  NbSpinnerModule,
]

const DIRECTIVES = [ReadOnlyDirective]
const COMPONENTS = [NotFoundComponent, ValidationMessageComponent, DeleteComponent]

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class SharedModule { }
