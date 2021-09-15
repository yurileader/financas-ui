export interface Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  localidade: string;
  estado: string;
}

export interface EstadoBr {
  code: string;
  name: string;
}

export type EstadosBr = Array<EstadoBr>
