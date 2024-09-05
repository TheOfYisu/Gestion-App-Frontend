import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { GeneralService } from '../services/general.service';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const generalService = inject(GeneralService);
  generalService.setLoading(true);
  return next(req).pipe(
    finalize(() => {
      generalService.setLoading(false);
    })
  );
};
