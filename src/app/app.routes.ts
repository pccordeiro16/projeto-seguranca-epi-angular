import { Routes } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';

export const routes: Routes = [
    {path: '', redirectTo: 'epi', pathMatch: 'full'}, //  ao abrir http://localhost:4200, redireciona direto para http://localhost:4200/epi 
    {path: 'epi', component: EpiList},
    {path: 'epi/detalhe', component: EpiDetalhe}
];
