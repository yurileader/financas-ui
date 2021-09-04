import { LancamentosService } from './../../core/services/lancamentos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LancamentoComponent } from './lancamento/lancamento.component';
import { LancamentosRoutes } from './lancamentos-routing.module';

import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    LancamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LancamentosRoutes,
    TableModule
  ],
  exports: [LancamentoComponent],
  providers:[LancamentosService]
})
export class LancamentoModule { }
