import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { publicroutes } from './public.routes';

export const publicConfig: ApplicationConfig = {
  providers: [provideRouter(publicroutes)],
};
