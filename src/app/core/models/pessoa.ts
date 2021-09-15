import { Endereco } from "./endereco";

export interface Pessoa {
  id:number;
  nome: string;
  endereco: Endereco
}

export type Pessoas = Array<Pessoa>;
