import { Routes } from '@angular/router';
import { publicroutes } from './pages/public/public.routes';
import { PublicComponent } from './pages/public/public.component';
import { NotFoundComponent } from './pages/public/layout/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: publicroutes,
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
