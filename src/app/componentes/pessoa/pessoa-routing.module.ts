import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
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
  {path:'novo', component: PessoaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaRoutingModule {}
