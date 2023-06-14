import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/restaurante';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';
import { RestauranteFirestoreService } from 'src/app/shared/services/restaurante-firestore.service';

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
  constructor(private restauranteService: RestauranteFirestoreService, private activatedRoute: ActivatedRoute, private roteador: Router) {
    this.botaoManutencao = 'Cadastrar';
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.restauranteService.buscarPorId(id).subscribe(restaurante => this.restauranteManutencao = restaurante);
      this.botaoManutencao = 'Salvar';
    } 
  }

  inserir () {
    this.restauranteService.inserir(this.restauranteManutencao).subscribe();
  }
  atualizar () {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.restauranteService.editar(id, this.restauranteManutencao).subscribe(
        () => this.roteador.navigate(['listagem-restaurantes'])
      );
    }
  } 
}
