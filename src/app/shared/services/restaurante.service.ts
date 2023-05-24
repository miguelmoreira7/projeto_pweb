import { Injectable } from '@angular/core';
import { Restaurante } from '../model/restaurante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  url_restaurantes = 'http://localhost:3000/restaurantes';

  constructor(private http: HttpClient) {

  }
  listar(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.url_restaurantes);
  }
  inserir(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.post<Restaurante>(this.url_restaurantes, restaurante);
  }
  remover(id: number): Observable<Restaurante> {
    return this.http.delete<Restaurante>(`${this.url_restaurantes}/${id}`);
  }
  buscarPorId(id: number): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.url_restaurantes}/${id}`)
  }
  editar(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.put<Restaurante>(`${this.url_restaurantes}/${restaurante.id}`, restaurante);
  }
}