import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si hay usuario autenticado, permite navegar.
  // Si no hay sesion, redirige a /auth.
  return authService.currentUser()
    ? true
    : router.createUrlTree(['/auth']);
};