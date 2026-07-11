import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList, EpiDetalhe, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  // protected readonly title = signal('Turma 2026.1');
  titulo = "Sistema de Controle de EPIs";
  subtitulo = "Gestão de Segurança do Trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade dos equipamentos de proteção individual";
}
