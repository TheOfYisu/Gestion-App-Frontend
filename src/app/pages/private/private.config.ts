import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { privaterouter } from './private.routes';

export const privateConfig: ApplicationConfig = {
  providers: [provideRouter(privaterouter)],
};
