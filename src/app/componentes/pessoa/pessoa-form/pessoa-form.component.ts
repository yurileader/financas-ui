import { Pessoa } from './../../../core/models/pessoa';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PessoasService } from './../../../core/services/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent implements OnInit {
  pessoaForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pessoasService: PessoasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      endereco: this.fb.group({
        logradouro: ['', [Validators.required, Validators.minLength(6)]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: [''],
        cep: ['', [Validators.required]],
        cidade: [''],
        estado: [''],
      }),
    });
  }

  cadastrar() {
    if (this.pessoaForm.valid) {
      const pessoa = this.pessoaForm.getRawValue() as Pessoa;
      this.pessoasService.cadastrar(pessoa).subscribe(
        () => {
          this.router.navigate(['/pessoas']);
        },
        (error) => console.log(error)
      );
    }
  }
}
