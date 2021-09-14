import { Lancamento } from './../models/lancamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class LancamentosService {
  constructor(private http: HttpClient) {}

  listaLancamento(): Observable<any> {
    return this.http.get<any>(`${API}/lancamentos/details`);
  }

  cadastrar(lancamento: Lancamento) {
    return this.http.post<Lancamento>(`${API}/lancamentos`, lancamento);
  }
}
