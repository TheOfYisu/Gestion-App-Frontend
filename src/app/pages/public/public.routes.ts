import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';

export const publicroutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service', component: ServiceComponent },
];
