import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pessoa } from './../../../core/models/pessoa';
import { EnderecoService } from './../../../shared/services/endereco.service';
import { PessoasService } from './../../../core/services/pessoas.service';
import { Endereco, EstadoBr } from './../../../core/models/endereco';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
})
export class PessoaFormComponent implements OnInit {
  pessoaForm!: FormGroup;
  estados!: EstadoBr[];
  constructor(
    private fb: FormBuilder,
    private pessoasService: PessoasService,
    private enderecoService: EnderecoService,
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

    this.carregarEstados();
  }

  carregarEstados() {
    this.enderecoService.getEstadosBr().subscribe((estados) => {
      this.estados = estados;
    });
  }

  buscarCep() {
    console.log('CLICOU');

    const cep = this.pessoaForm.get('cep')?.value ?? 'Yuri';
    console.log("CEP", cep);

    this.resetaDadosForm;
    this.enderecoService.consultaCep("01001000").subscribe(
      (cep) => {
        this.populaDadosForm(cep);
        console.log(cep);
      },
      (error) => console.log(error)
    );
  }

  populaDadosForm(cep: Endereco) {
    this.pessoaForm.patchValue({
      endereco: {
        logradouro: cep.logradouro,
        complemento: cep.complemento,
        bairro: cep.bairro,
        cidade: cep.localidade,
        estado: cep.estado,
      },
    });
  }

  resetaDadosForm() {
    this.pessoaForm.reset();
  }

  salvar() {
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
