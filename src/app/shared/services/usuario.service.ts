import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url_usuarios = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) {

  }
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url_usuarios);
  }
  inserir(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url_usuarios, usuario);
  }
  remover(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.url_usuarios}/${id}`);
  }
  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url_usuarios}/${id}`)
  }
  editar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario);
  }
}
