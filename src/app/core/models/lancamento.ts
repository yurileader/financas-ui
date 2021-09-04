import { Categoria } from './categoria';
import { Pessoa } from './pessoa';

export interface Lancamento {
  id: number;
  descricao: string;
  dataVencimento: string;
  dataPagamento: string;
  valor: number;
  observacao: string;
  tipo: string;
  categoria: Categoria;
  pessoa: Pessoa;
}

export type Lancamentos = Array<Lancamento>;
