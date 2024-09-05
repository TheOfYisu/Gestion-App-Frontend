import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GeneralService } from '../../core/services/general.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DataInterface } from '../../core/interfaces/data.interface';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidenavComponent,
    NavbarComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
})
export class PrivateComponent implements OnInit {
  private title = 'Manager';
  dataUser: DataInterface = {
    name: '',
    lastname: '',
    id: 0,
    roles: [],
  };
  sidenav: boolean;

  constructor(
    private generalService: GeneralService,
    private spinner: NgxSpinnerService
  ) {
    this.generalService.setTitle(this.title);
    this.sidenav = window.innerWidth > 768;
    this.getDataUser();
    this.getSidenav();
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

  getDataUser() {
    this.spinner.show();
    this.generalService.dataUser.subscribe(
      (res) => {
        this.dataUser = res.data;
        this.spinner.hide();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSidenav() {
    this.generalService.booleanSideNav$.subscribe((value) => {
      this.sidenav = value;
    });
  }
}
