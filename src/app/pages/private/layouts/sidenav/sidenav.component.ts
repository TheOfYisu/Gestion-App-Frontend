import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDENAV_ITEMS } from '../../../../core/constants/sidenav-items.constant';
import { SidenavItemInterface } from '../../../../core/interfaces/sidenav-items.interface';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  items_sidenav: SidenavItemInterface[] = SIDENAV_ITEMS;
}
