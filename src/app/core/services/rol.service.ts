import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppResponse } from '../interfaces/app.interface';
import {
  getUserxRolAllUserInterface,
  UserxRolInterface,
} from '../interfaces/rol.interface';
import { UsersInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private urlbackend: string = environment.urlbackend;
  constructor(private httpClient: HttpClient) {}

  getAllRoles() {
    return this.httpClient.get(`${this.urlbackend}/rol`);
  }

  getRolById(id: number) {
    return this.httpClient.get(`${this.urlbackend}/rol/${id}`);
  }

  createRol(rol: any) {
    return this.httpClient.post(`${this.urlbackend}/rol`, rol);
  }

  updateRol(rol: any) {
    return this.httpClient.put(`${this.urlbackend}/rol/${rol.id}`, rol);
  }

  getRolesByUserId(
    id: number
  ): Observable<AppResponse<getUserxRolAllUserInterface>> {
    return this.httpClient.get<AppResponse<getUserxRolAllUserInterface>>(
      `${this.urlbackend}/userxrol/allrols/${id}`
    );
  }
}
