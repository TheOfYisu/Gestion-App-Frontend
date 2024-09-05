import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  happyClients: number = 0;
  operations: number = 0;
  customers: number = 0;

  private happyClientsTarget: number = 6;
  private operationsTarget: number = 4;
  private customersTarget: number = 400;

  ngOnInit() {
    this.animateCount('happyClients', this.happyClientsTarget, 100);
    this.animateCount('operations', this.operationsTarget, 100);
    this.animateCount('customers', this.customersTarget, 100);
  }

  animateCount(
    property: 'happyClients' | 'operations' | 'customers',
    target: number,
    duration: number
  ) {
    const stepTime = Math.abs(Math.floor(duration / target));
    let interval = setInterval(() => {
      if (this[property] < target) {
        // Calcula el incremento dinámico
        const increment = Math.ceil((target - this[property]) / 50);
        this[property] += increment;
        if (this[property] > target) {
          this[property] = target; // Asegura que no se pase del valor objetivo
        }
      } else {
        clearInterval(interval);
      }
    }, stepTime);
  }
}
