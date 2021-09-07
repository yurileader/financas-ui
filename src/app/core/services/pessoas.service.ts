import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

constructor(private http: HttpClient) { }

  listarPessoas(){
    return this.http.get<any>(`${API}/pessoas`);
  }
}
