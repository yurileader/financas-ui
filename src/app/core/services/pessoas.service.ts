import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

import { Pessoa } from '../models/pessoa';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

constructor(private http: HttpClient) { }

  listarPessoas(){
    return this.http.get<any>(`${API}/pessoas`);
  }

  cadastrar(pessoa:Pessoa){
    return this.http.post<any>(`${API}/pessoas`, pessoa)
  }
}
