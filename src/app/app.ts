import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './epi-list/epi-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('Turma 2026.1');
  titulo = "Sistema de Controle de EPIs";
  subtitulo = "Gestão de Segurança do Trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade dos equipamentos de proteção individual";
}
