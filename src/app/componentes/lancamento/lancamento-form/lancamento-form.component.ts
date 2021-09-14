import { Router } from '@angular/router';
import { Lancamento } from './../../../core/models/lancamento';
import { LancamentosService } from './../../../core/services/lancamentos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css'],
})
export class LancamentoFormComponent implements OnInit {
  lancamentoForm!: FormGroup;
  stateOptions = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [
    { name: 'Gasolina', code: 'gasolina' },
    { name: 'Transporte', code: 'transporte' },
    { name: 'Alimentação', code: 'alimentacao' },
  ];

  pessoas = [
    { name: 'João', code: 'joao' },
    { name: 'Millene', code: 'millene' },
    { name: 'Yuri', code: 'yuri' },
  ];
  constructor(
    private fb: FormBuilder,
    private lancamentosService: LancamentosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lancamentoForm = this.fb.group({
      tipoLancamento: [''],
      dataVencimento: [new Date()],
      dataRecebimento: [''],
      descricao: [''],
      valor: [''],
      categoria: [''],
      pessoa: [''],
      observacacao: [''],
    });
  }

  salvar() {
    if (this.lancamentoForm.valid) {
      const lancamento = this.lancamentoForm.getRawValue() as Lancamento;
      this.lancamentosService.cadastrar(lancamento).subscribe(
        () => {
          this.router.navigate(['/lancamentos']);
        },
        (error) => console.log(error)
      );
    }
  }
}
