import { Component } from '@angular/core';
import { GeneralService } from '../../../../core/services/general.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
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
