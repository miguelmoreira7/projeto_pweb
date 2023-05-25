import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_restaurante = false;
  login_usuario = false;

  constructor(private rotaAtual: ActivatedRoute) {
    const tipo = this.rotaAtual.snapshot.paramMap.get('tipo')
    if (tipo === 'restaurante') {
      this.login_restaurante = true;
    }
    if (tipo === 'usuario') {
      this.login_usuario = true;
    }
  }
  ngOnInit(): void {}
}
