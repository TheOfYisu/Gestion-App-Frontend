import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment.development';
import { AppResponse } from '../interfaces/app.interface';
import { DataInterface } from '../interfaces/data.interface';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private urlbackend: string = environment.urlbackend;

  private booleanSideNav = new BehaviorSubject<boolean>(
    window.innerWidth > 768
  );
  booleanSideNav$ = this.booleanSideNav.asObservable();

  private isloading = new BehaviorSubject<boolean>(false);
  isloading$ = this.isloading.asObservable();

  constructor(
    private titleService: Title,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  setBooleanSideNav(value: boolean) {
    this.booleanSideNav.next(!value);
  }

  setLoading(value: boolean) {
    this.isloading.next(value);
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  async alertconfirm(title: string, text: string) {
    const result = await AlertService.showWarningAlert(title, text, {
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Ok',
    });
    if (result.isConfirmed) {
      this.router.navigate(['/login']);
    }
  }

  getToken() {
    const token = localStorage.getItem('token-auth-gestion-app');
    if (!token) {
      this.alertconfirm(
        'Error',
        'Esta acción requiere que inicie sesión, por favor inicie sesión para continuar'
      );
      throw new Error('Token no encontrado en el local storage');
    }
    return token;
  }

  validateToken() {
    const token = this.getToken();
    const decodedToken: any = jwtDecode(token);
    const exp = decodedToken.exp;
    const now = new Date().getTime() / 1000;
    if (exp < now) {
      this.alertconfirm(
        'Error',
        'Su sesión ha expirado, por favor inicie sesión para continuar'
      );
      throw new Error('Token expirado');
    }
    return true;
  }

  dataToken() {
    if (this.validateToken()) {
      const token = this.getToken();
      const decodedToken: any = jwtDecode(token);
      return decodedToken;
    }
  }

  get dataUser(): Observable<AppResponse<DataInterface>> {
    const dataToken = this.dataToken();
    return this.httpClient.get<AppResponse<DataInterface>>(
      `${this.urlbackend}/user/name/${dataToken.id}`
    );
  }
}
