import { LancamentosService } from './../../core/services/lancamentos.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';

import { LancamentoComponent } from './lancamento/lancamento.component';
import { LancamentosRoutes } from './lancamentos-routing.module';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [LancamentoComponent],
  imports: [
    CommonModule,
    RouterModule,
    LancamentosRoutes,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
  ],
  exports: [LancamentoComponent],
  providers: [LancamentosService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class LancamentoModule {}
