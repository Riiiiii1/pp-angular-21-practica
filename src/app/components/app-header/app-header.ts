import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './app-header.html',
  styleUrl: "./app-header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  
  readonly brand = signal("PPW Angular");
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
    () => (this.showInfo() ? 'Ocultar info' : 'Mostrar info')
  );

  toggleInfo() {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    //actualizar el valor de la senial brand
    this.brand.update((cualquierPalabra) => cualquierPalabra + '!');
  }

  resetBrand(): void {
    this.brand.set("Nombre reseteado");
  }

  // --- Integración de Auth ---
  private authService = inject(AuthService);
  private router = inject(Router);

  // El signal del servicio: null = no autenticado, User = autenticado.
  currentUser = this.authService.currentUser;

  logout() {
    this.authService.logout().subscribe(() => {
      // Redirige al login despues de cerrar sesion.
      this.router.navigate(['/login']);
    });
  }
}