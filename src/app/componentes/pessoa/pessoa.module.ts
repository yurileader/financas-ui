import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [PessoaComponent, PessoaFormComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    ReactiveFormsModule,
    InputMaskModule,
    SharedModule,
    DropdownModule
  ],
  exports: [PessoaComponent, PessoaFormComponent],
})
export class PessoaModule {}
