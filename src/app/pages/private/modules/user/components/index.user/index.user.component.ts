import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../core/services/user.service';
import { UserInterface } from '../../../../../../core/interfaces/user.interface';
import { AlertService } from '../../../../../../core/services/alert.service';
import { RolService } from '../../../../../../core/services/rol.service';
import { UserxRolInterface } from '../../../../../../core/interfaces/rol.interface';

@Component({
  selector: 'app-index.user',
  standalone: true,
  imports: [],
  templateUrl: './index.user.component.html',
  styleUrl: './index.user.component.scss',
})
export class IndexUserComponent implements OnInit {
  users: UserInterface[] = [];
  dataUser: any[] = [];
  header_table: string[] = [
    'DNI',
    'FOTO',
    'NOMBRE',
    'CORREO',
    'ESTADO',
    'ACCIONES',
  ];

  constructor(
    private userService: UserService,
    private rolService: RolService
  ) {}

  ngOnInit() {
    this.getAllUsers();
    console.log(this.dataUser);
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (res) => {
        for (let user of res.data.users) {
          this.rolService.getRolesByUserId(user.id).subscribe(
            (res_1) => {
              const roles = res_1.data.userxrol.map((rol: UserxRolInterface) =>
                rol.id_rol ? rol.id_rol.name : 'Rol desconocido'
              );
              this.dataUser.push({
                id: user.id,
                dni: user.dni,
                name: user.name,
                email: user.email,
                roles: roles,
              });
            },
            (error) => {
              console.error(error);
              AlertService.showErrorAlert(
                'Error',
                'Error al obtener los roles del usuario'
              );
            }
          );
        }
      },
      (error) => {
        console.error(error);
        AlertService.showErrorAlert('Error', 'Error al obtener los usuarios');
      }
    );
  }
}
