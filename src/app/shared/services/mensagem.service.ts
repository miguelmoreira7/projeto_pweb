import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) {
  }

  success(mensagem: string) {
    this.abrirSnack(mensagem, ['success'])
  }
  info(mensagem: string) {
    this.abrirSnack(mensagem, ['info'])
  }
  warning(mensagem: string) {
    this.abrirSnack(mensagem, ['warning'])
  }
  error(mensagem: string) {
    this.abrirSnack(mensagem, ['error'])
  }

  private abrirSnack(mensagem: string, classesExtras: string[]): void {
    const snackConfig = new MatSnackBarConfig();
    snackConfig.politeness = 'assertive';
    snackConfig.duration = 5000;
    snackConfig.panelClass = classesExtras;

    this.snackBar.open(mensagem, 'X', snackConfig);
  }
}
