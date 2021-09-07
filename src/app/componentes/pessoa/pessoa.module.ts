import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa/pessoa.component';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [PessoaComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
  ],
  exports: [PessoaComponent],
})
export class PessoaModule {}
