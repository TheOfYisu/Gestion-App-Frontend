import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {}
