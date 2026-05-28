import { Component, inject ,signal} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs'; // ← estos faltaban
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';
import { FavoritesService } from '../../../../core/services/favorites';
import { AuthService } from '../../../../core/services/auth';
@Component({
  selector: 'app-simpson-detail-page',
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
  styleUrl: './simpson-detail-page.css',
})
export class SimpsonDetailPage {
    private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  private cacheService = inject(SimpsonsCacheService);
  private characterId = Number(this.route.snapshot.paramMap.get('id'));
  isFavorite = signal(false);
  private favoritesService = inject(FavoritesService);
  authService = inject(AuthService);

  characterResource = rxResource({
    stream: () => {
      // Paso A: buscar primero en cache local.
      const cached = this.cacheService.getById(this.characterId);
      if (cached) {
        // Si existe en localStorage, devolvemos el dato al instante.
        return of(cached);
      }

      // Paso B: si no existe en cache, consultar API.
      return this.simpsonsService.getCharacterById(this.characterId).pipe(
        // Guardamos la respuesta para visitas futuras.
        tap((character) => this.cacheService.save(character))
      );
    },
  });

    toggleFavorite() {
    const uid = this.authService.uid;
    if (!uid) return; // No hace nada si no hay sesion activa.

    if (this.isFavorite()) {
      // Si ya es favorito, lo eliminamos de Firestore.
      this.favoritesService.removeFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(false);
      });
    } else {
      // Si no es favorito, lo guardamos en Firestore.
      this.favoritesService.addFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(true);
      });
    }
  }
}