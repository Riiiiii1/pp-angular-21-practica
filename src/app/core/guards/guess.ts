
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si ya hay sesion, no tiene sentido volver a /auth.
  return authService.currentUser()
    ? router.createUrlTree(['/'])
    : true;
};