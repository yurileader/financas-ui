import { __values } from 'tslib';
import { LancamentosService } from './../../../core/services/lancamentos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lancamentos } from './../../../core/models/lancamento';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css'],
})
export class LancamentoComponent implements OnInit {
  lancamentos!: Lancamentos;

  constructor(private lancamentosService: LancamentosService) {}

  ngOnInit(): void {
    this.lancamentosService.listaLancamento().subscribe(
      (lancamento) => {
        this.lancamentos = lancamento.content;
        console.log(this.lancamentos);
      },
      (error) => console.log('error', error)
    );
  }
}
