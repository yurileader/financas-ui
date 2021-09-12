import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css'],
})
export class LancamentoFormComponent implements OnInit {
  lancamentoForm!: FormGroup;
  stateOptions!: any[];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Vencimento', value: 'Vencimento' },
      { label: 'Recebimento', value: 'Recebimento' },
    ];
    this.lancamentoForm = this.fb.group({
      dataVencimento: [new Date()]
    });
  }
}
