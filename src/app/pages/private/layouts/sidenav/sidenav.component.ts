import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDENAV_ITEMS } from '../../../../core/constants/sidenav-items.constant';
import { SidenavItemInterface } from '../../../../core/interfaces/sidenav-items.interface';
import { DataInterface } from '../../../../core/interfaces/data.interface';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input() dataUser: DataInterface = {
    name: '',
    lastname: '',
    id: 0,
    roles: [],
  };
  items_sidenav: SidenavItemInterface[] = SIDENAV_ITEMS;
}
