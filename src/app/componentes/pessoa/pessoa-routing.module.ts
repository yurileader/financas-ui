import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListResolver } from 'src/app/core/guards/pessoa-list.resolver';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent,
    resolve: {
      pessoas: PessoaListResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}
