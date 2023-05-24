import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/shared/model/usuario'

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent {
  usuarios: Usuario[] = [];
  constructor (private usuarioService: UsuarioService) {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    )
  }
  excluir (usuarioARemover: Usuario):void {
    this.usuarioService.remover(usuarioARemover.id).subscribe();
    const indx = this.usuarios.findIndex(usuario => usuario.id === usuarioARemover.id);
    this.usuarios.splice(indx, 1);
  }
}
