import { Restaurante } from 'src/app/shared/model/restaurante';
import { Component } from '@angular/core';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';


@Component({
  selector: 'app-login-restaurante',
  templateUrl: './login-restaurante.component.html',
  styleUrls: ['./login-restaurante.component.css']
})
export class LoginRestauranteComponent {
  email: string;
  senha: string;
  hide = true;

  constructor(private restauranteService: RestauranteService) {
    this.email = '';
    this.senha = ''; 
  }
  validar(){
    const indice = this.restauranteService.validar(this.email, this.senha)
    if (indice === '0') {
      console.log('restaurante não encontrado')
    }
    if (indice != '0') {
      console.log('login efetuado')
    }
  }

}
