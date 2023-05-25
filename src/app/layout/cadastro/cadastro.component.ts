import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastro_restaurante = false;
  cadastro_usuario = false;

  constructor(private rotaAtual: ActivatedRoute) {
    const tipo = this.rotaAtual.snapshot.paramMap.get('tipo')
    if (tipo === 'restaurante') {
      this.cadastro_restaurante = true;
    }
    if (tipo === 'usuario') {
      this.cadastro_usuario = true;
    }
  }

}
