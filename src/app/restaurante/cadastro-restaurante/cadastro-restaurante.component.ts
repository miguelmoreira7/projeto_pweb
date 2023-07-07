import { MensagemService } from './../../shared/services/mensagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/restaurante';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.css']
})
export class CadastroRestauranteComponent {
  botaoManutencao: String;
  restauranteManutencao: Restaurante = {
    id: '',
    nome: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
    email: '',
    senha: '',
  }
  constructor(private restauranteService: RestauranteService, private activatedRoute: ActivatedRoute, private roteador: Router, private mensagemService: MensagemService) {
    this.botaoManutencao = 'Cadastrar';
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.restauranteService.buscarPorId(id).subscribe(restaurante => this.restauranteManutencao = restaurante);
      this.botaoManutencao = 'Salvar';
    } 
  }

  inserir () {
    this.restauranteService.inserir(this.restauranteManutencao).subscribe(
      () => {
        this.mensagemService.success('Restaurante cadastrado com sucesso!')
      }
    );
  }
  atualizar () {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.restauranteService.editar(this.restauranteManutencao).subscribe(
        () => {
          this.roteador.navigate(['listagem-restaurantes'])
          this.mensagemService.success('Restaurante atualizado com sucesso!')
        }
      );
    }
  } 
}
