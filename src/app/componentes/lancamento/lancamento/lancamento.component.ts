import { __values } from 'tslib';
import { LancamentosService } from './../../../core/services/lancamentos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lancamentos } from './../../../core/models/lancamento';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css'],
})
export class LancamentoComponent implements OnInit {
  lancamentos!: Lancamentos;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.lancamentos =
          this.activatedRoute.snapshot.data['lancamentos'].content;
      },
      (error) => console.log('error', error)
    );
  }
}
