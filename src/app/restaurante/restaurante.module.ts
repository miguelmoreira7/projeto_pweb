import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemRestaurantesComponent } from './listagem-restaurantes/listagem-restaurantes.component';
import { ImportsModule } from '../imports/imports.module';
import { CadastroRestauranteComponent } from './cadastro-restaurante/cadastro-restaurante.component';
import { LoginRestauranteComponent } from './login-restaurante/login-restaurante.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListagemRestaurantesComponent,
    CadastroRestauranteComponent,
    LoginRestauranteComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    FormsModule
  ],
  exports: [
    ListagemRestaurantesComponent,
    CadastroRestauranteComponent,
    LoginRestauranteComponent
  ]
})
export class RestauranteModule { }
