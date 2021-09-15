import { Endereco } from './../../core/models/endereco';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosBr } from 'src/app/core/models/endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadosBr>('assets/dados/estadosbr.json');
  }

  consultaCep(cep:string){
    console.log("CEP ENDEREÇO SERVICE", cep);

    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
