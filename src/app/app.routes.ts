import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Báscicos',
    loadComponent: () => import('./pages/basic-page/basic-page.component')
  },
  {
    path: 'numbers',
    title: 'Pipes de Números',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component')
  },
  {
    path: 'uncommons',
    title: 'Pipes poco comunes',
    loadComponent: () => import('./pages/uncommons-page/uncommons-page.component')
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page.component')
  },
  {
    path: '**',
    redirectTo: 'basic',
  }
];
