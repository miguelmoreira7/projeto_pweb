import { Injectable } from '@angular/core';
import { Restaurante } from '../model/restaurante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  url_restaurantes = 'http://localhost:8080/restaurantes';
  restaurantes: Restaurante[] = [];

  constructor(private http: HttpClient) {

  }
  validar (email: string, senha: string): string {
    this.listar().subscribe(restaurantes => this.restaurantes = restaurantes)
    for (let restaurante of this.restaurantes) {
      if (restaurante.email === email && restaurante.senha === senha) {
        return restaurante.id;
      }
    }
    return '0'
  }
  listar(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.url_restaurantes);
  }
  inserir(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.post<Restaurante>(this.url_restaurantes, restaurante);
  }
  remover(id: String): Observable<Restaurante> {
    return this.http.delete<Restaurante>(`${this.url_restaurantes}/${id}`);
  }
  buscarPorId(id: String): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.url_restaurantes}/${id}`)
  }
  editar(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.put<Restaurante>(`${this.url_restaurantes}/${restaurante.id}`, restaurante);
  }
}