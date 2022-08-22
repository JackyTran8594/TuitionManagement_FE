import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../auth/not-found/not-found.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { DeleteComponent } from './delete/delete.component';
import { ReadOnlyDirective } from './directives/read-only.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../auth/_helper/jwt-interceptor.service';
import { HttpService } from './http.service';
import { AuthService } from '../auth/service/auth.service';
import { ComponentModule } from '../@component/component.module';
import { NgxPaginationModule } from 'ngx-pagination';

const NB_MODULES = [
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbIconModule,
  NbSpinnerModule,
  NbDialogModule.forChild()
]

const SERVICES = [AuthService, HttpService]

const DIRECTIVES = [ReadOnlyDirective]
const COMPONENTS = [DeleteComponent]

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [
    CommonModule,
    HttpClientModule,
    ...NB_MODULES,
    
  ],
  exports: [...COMPONENTS, ...DIRECTIVES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true,
    },
    ...SERVICES
  ]
})
export class SharedModule { }
