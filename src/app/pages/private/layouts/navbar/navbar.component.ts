import { Component, Input } from '@angular/core';
import { GeneralService } from '../../../../core/services/general.service';
import { DataInterface } from '../../../../core/interfaces/data.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() dataUser: DataInterface = {
    name: '',
    lastname: '',
    id: 0,
    roles: [],
  };
  private sidenav: boolean = true;

  constructor(private generalService: GeneralService) {
    this.getSidenav();
  }

  toggleSidenav() {
    this.generalService.setBooleanSideNav(this.sidenav);
  }

  getSidenav() {
    this.generalService.booleanSideNav$.subscribe((value) => {
      this.sidenav = value;
    });
  }
}
