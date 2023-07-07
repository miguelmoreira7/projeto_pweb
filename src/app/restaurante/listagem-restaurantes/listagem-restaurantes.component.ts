import { MensagemService } from './../../shared/services/mensagem.service';
import { Component } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/restaurante';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-listagem-restaurantes',
  templateUrl: './listagem-restaurantes.component.html',
  styleUrls: ['./listagem-restaurantes.component.css']
})
export class ListagemRestaurantesComponent {
  restaurantes: Restaurante[];
  constructor (private restauranteService: RestauranteService, private mensagemService: MensagemService) {
    this.restaurantes = new Array<Restaurante>();
    this.restauranteService.listar().subscribe(
      restaurantes => {
        this.restaurantes = restaurantes
        this.mensagemService.info('Mostrando todos os restaurantes!')
      })
  }
  excluir (restauranteARemover: Restaurante): void {
    this.restauranteService.remover(restauranteARemover.id).subscribe(() => {this.mensagemService.success('Restaurante apagado com sucesso!')})
    const indx = this.restaurantes.findIndex(restaurante => restaurante.id === restauranteARemover.id);
    this.restaurantes.splice(indx, 1);
  }
}