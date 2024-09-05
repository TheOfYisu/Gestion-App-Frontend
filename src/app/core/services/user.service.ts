import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserInterface, UsersInterface } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { AppResponse } from '../interfaces/app.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlbackend: string = environment.urlbackend;

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<AppResponse<UsersInterface>> {
    return this.httpClient.get<AppResponse<UsersInterface>>(
      `${this.urlbackend}/user/all`
    );
  }
}
