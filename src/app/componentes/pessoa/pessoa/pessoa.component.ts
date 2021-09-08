import { ActivatedRoute } from '@angular/router';
import { Pessoas } from './../../../core/models/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent implements OnInit {
  pessoas!: Pessoas;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pessoas = this.activatedRoute.snapshot.data['pessoas'];
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);

    });
  }
}
