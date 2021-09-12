import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PessoasService } from './../../../core/services/pessoas.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent implements OnInit {
  pessoaForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pessoasService: PessoasService
  ) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      estado: [''],
    });
  }
}
