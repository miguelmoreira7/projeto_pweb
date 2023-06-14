import { Component } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/restaurante';
import { RestauranteFirestoreService } from 'src/app/shared/services/restaurante-firestore.service';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-listagem-restaurantes',
  templateUrl: './listagem-restaurantes.component.html',
  styleUrls: ['./listagem-restaurantes.component.css']
})
export class ListagemRestaurantesComponent {
  restaurantes: Restaurante[];
  constructor (private restauranteService: RestauranteFirestoreService) {
    this.restaurantes = new Array<Restaurante>();
    this.restauranteService.listar().subscribe(
      restaurantes => this.restaurantes = restaurantes)
  }
  excluir (restauranteARemover: Restaurante): void {
    this.restauranteService.remover(restauranteARemover.id).subscribe()
    const indx = this.restaurantes.findIndex(restaurante => restaurante.id === restauranteARemover.id);
    this.restaurantes.splice(indx, 1);
  }
}