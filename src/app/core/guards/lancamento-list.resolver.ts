import { LancamentosService } from './../services/lancamentos.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LancamentoListResolver implements Resolve<boolean> {
  constructor(private lancamentoService: LancamentosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.lancamentoService.listaLancamento();
  }
}
