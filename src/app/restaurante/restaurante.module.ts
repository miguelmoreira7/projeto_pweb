import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemRestaurantesComponent } from './listagem-restaurantes/listagem-restaurantes.component';
import { ImportsModule } from '../imports/imports.module';



@NgModule({
  declarations: [
    ListagemRestaurantesComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports: [
    ListagemRestaurantesComponent
  ]
})
export class RestauranteModule { }
