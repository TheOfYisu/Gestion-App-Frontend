import { SidenavItemInterface } from '../interfaces/sidenav-items.interface';

export const SIDENAV_ITEMS: SidenavItemInterface[] = [
  {
    id: 'dashboard',
    name: 'Tablero',
    icon: 'bi bi-clipboard-data-fill',
    routerLink: '/manager/dashboard',
    children: [],
  },
  {
    id: 'user',
    name: 'Usuarios',
    icon: 'bi bi-people-fill',
    routerLink: '/manager/user',
    children: [],
  },
];
