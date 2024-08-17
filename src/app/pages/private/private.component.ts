import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GeneralService } from '../../core/services/general.service';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidenavComponent,
    NavbarComponent,
    LoadingComponent,
  ],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
})
export class PrivateComponent implements OnInit {
  private title = 'Manager';

  loading: boolean = false;
  sidenav: boolean;

  constructor(private generalService: GeneralService) {
    this.generalService.setTitle(this.title);
    this.sidenav = window.innerWidth > 768;
    this.getSidenav();
    this.getLoading();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    if (window.innerWidth < 768) {
      this.sidenav = false;
    } else {
      this.sidenav = true;
    }
  }

  getLoading() {
    this.generalService.isloading$.subscribe((value) => {
      this.loading = value;
    });
  }

  getSidenav() {
    this.generalService.booleanSideNav$.subscribe((value) => {
      this.sidenav = value;
    });
  }
}
