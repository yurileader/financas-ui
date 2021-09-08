import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lancamentos' },
  {
    path: 'lancamentos',
    loadChildren: () =>
      import('./componentes/lancamento/lancamento.module')
      .then((m) => m.LancamentoModule
      ),
  },
  {
    path: 'pessoas',
    loadChildren: () =>
      import('./componentes/pessoa/pessoa.module')
      .then((m) => m.PessoaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
