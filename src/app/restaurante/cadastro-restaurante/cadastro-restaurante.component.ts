import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/restaurante';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.css']
})
export class CadastroRestauranteComponent {
  restauranteManutencao: Restaurante = {
    id: 0,
    nome: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
    email: '',
    senha: '',
  }
  constructor(private restauranteService: RestauranteService, private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.restauranteService.buscarPorId(Number(id)).subscribe(restaurante => this.restauranteManutencao = restaurante)
    }
  }

  inserir () {
    this.restauranteService.inserir(this.restauranteManutencao).subscribe();
  }
}
