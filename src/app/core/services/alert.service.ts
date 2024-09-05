import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  static async showAlert(
    title: string,
    text: string,
    icon: 'success' | 'error' | 'warning' | 'info',
    options?: SweetAlertOptions
  ): Promise<SweetAlertResult<any>> {
    const result = await Swal.fire({
      title,
      text,
      icon,
      ...(options as SweetAlertOptions), // Asegura el tipo aquí
    });
    return result;
  }

  static async showSuccessAlert(
    title: string,
    text: string,
    options?: SweetAlertOptions
  ): Promise<SweetAlertResult<any>> {
    return this.showAlert(title, text, 'success', options);
  }

  static async showErrorAlert(
    title: string,
    text: string,
    options?: SweetAlertOptions
  ): Promise<SweetAlertResult<any>> {
    return this.showAlert(title, text, 'error', options);
  }

  static async showWarningAlert(
    title: string,
    text: string,
    options?: SweetAlertOptions
  ): Promise<SweetAlertResult<any>> {
    return this.showAlert(title, text, 'warning', options);
  }

  static async showInfoAlert(
    title: string,
    text: string,
    options?: SweetAlertOptions
  ): Promise<SweetAlertResult<any>> {
    return this.showAlert(title, text, 'info', options);
  }
}
