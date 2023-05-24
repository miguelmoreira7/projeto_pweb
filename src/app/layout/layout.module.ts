import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ImportsModule } from '../imports/imports.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RestauranteModule } from '../restaurante/restaurante.module';




@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    RestauranteModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent
  ]
})
export class LayoutModule { }
