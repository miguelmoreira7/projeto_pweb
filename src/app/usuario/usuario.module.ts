import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { ImportsModule } from '../imports/imports.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';



@NgModule({
  declarations: [
    ListagemUsuariosComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports: [
    ListagemUsuariosComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent
  ]
})
export class UsuarioModule { }
