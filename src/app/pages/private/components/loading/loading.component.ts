import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from '../../../../core/services/general.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  constructor(
    private spinner: NgxSpinnerService,
    private generalService: GeneralService
  ) {
    this.showSpinner();
  }

  showSpinner() {
    this.generalService.isloading$.subscribe((value) => {
      if (value) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
