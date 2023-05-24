import { Component } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/restaurante';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-listagem-restaurantes',
  templateUrl: './listagem-restaurantes.component.html',
  styleUrls: ['./listagem-restaurantes.component.css']
})
export class ListagemRestaurantesComponent {
  restaurantes: Restaurante[] = [];
  constructor (private restaurantesService: RestauranteService) {
    this.restaurantesService.listar().subscribe(
      restaurantes => this.restaurantes = restaurantes
    )
  }
  excluir (restauranteARemover: Restaurante): void {
    this.restaurantesService.remover(restauranteARemover.id).subscribe()
    const indx = this.restaurantes.findIndex(restaurante => restaurante.id === restauranteARemover.id);
    this.restaurantes.splice(indx, 1);
  }
}