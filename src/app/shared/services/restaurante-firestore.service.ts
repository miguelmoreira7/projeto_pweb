import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Restaurante } from '../model/restaurante';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteFirestoreService {

  restaurantes: AngularFirestoreCollection<Restaurante>;
  nome_colecao = 'restaurantes';

  constructor(private afs: AngularFirestore) {
    this.restaurantes = afs.collection(this.nome_colecao);
  }

  listar(): Observable<Restaurante[]> {
    return this.restaurantes.valueChanges({idField: 'id'});
  }

  inserir(restaurante: Restaurante): Observable<object>{
    return from(this.restaurantes.add(Object.assign({}, restaurante)));
  }
  
  remover(id: string): Observable<void> {
    return from(this.restaurantes.doc(id).delete());
  }

  buscarPorId(id: string): Observable<Restaurante> {
    const doc = this.restaurantes.doc(id).get();
    doc.subscribe(document => console.log(document));

    return doc.pipe(map(document => document.data() as Restaurante));
  }

  editar(id: string, restaurante: Restaurante): Observable<void> {
    return from(this.restaurantes.doc(id).update(Object.assign({}, restaurante)));
  }

}
