export interface Pessoa {
  id:number;
  nome: string;
}

export interface Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export type Pessoas = Array<Pessoa>;
