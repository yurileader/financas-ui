import { LancamentoListResolver } from './../../core/guards/lancamento-list.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoComponent } from './lancamento/lancamento.component';

const routes: Routes = [
  {
    path: '',
    component: LancamentoComponent,
    resolve: {
      lancamentos: LancamentoListResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentosRoutes {}
