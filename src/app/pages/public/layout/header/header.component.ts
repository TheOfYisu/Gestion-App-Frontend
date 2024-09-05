import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-public',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  //Oculta el menú de navegación cuando esta descolapsado al hacer click en un enlace --
  collapseNavbar(navbar: any) {
    navbar.classList.remove('show');
  }
}
