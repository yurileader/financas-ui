import { LancamentosService } from './../../core/services/lancamentos.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LancamentoComponent } from './lancamento/lancamento.component';
import { LancamentosRoutes } from './lancamentos-routing.module';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [LancamentoComponent, LancamentoFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    LancamentosRoutes,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    ReactiveFormsModule,
    SelectButtonModule,

  ],
  exports: [LancamentoComponent],
  providers: [LancamentosService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class LancamentoModule {}
