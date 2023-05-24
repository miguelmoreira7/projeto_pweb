import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { ListagemRestaurantesComponent } from './restaurante/listagem-restaurantes/listagem-restaurantes.component';
import { ListagemUsuariosComponent } from './usuario/listagem-usuarios/listagem-usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listagem-restaurantes',
    component: ListagemRestaurantesComponent
  },
  {
    path: 'listagem-usuarios',
    component: ListagemUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
