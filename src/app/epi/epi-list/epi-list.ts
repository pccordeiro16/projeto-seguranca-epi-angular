import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit } from '../../../../node_modules/@angular/core/types/core';
import { Epi } from '../epi.model';
import { EpiService } from '../epi';
import { CommonModule } from '@angular/common'; //essa linha

@Component({
  selector: 'app-epi-list',
  imports: [RouterModule, CommonModule], // essa linha
  templateUrl: './epi-list.html',
  styleUrl: './epi-list.scss',
})

export class EpiList implements OnInit {
  epis: Epi[] = [];

  constructor(private epiService: EpiService) { }

  ngOnInit(): void{
    this.epiService.listar().subscribe({
      next: (epis) => this.epis = epis,
      error: (error) => console.error('Erro ao listar os EPIs:', error)
    });
    }
  }