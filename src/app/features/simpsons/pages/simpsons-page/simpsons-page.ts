import { Component } from '@angular/core';
import { SimpsonsService } from '../../services/simpsons.service';
import { inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
SimpsonsService
@Component({
  selector: 'app-simpsons-page',
  imports: [],
  templateUrl: './simpsons-page.html',
  styleUrl: './simpsons-page.css',
})
export class SimpsonsPage {
    // Inyectamos el servicio una sola vez en el componente.
  private simpsonsService = inject(SimpsonsService);

  // rxResource conecta Observable -> estado reactivo (loading, error, value).
  simpsonsResource = rxResource({
    // stream ejecuta la consulta de personajes de la pagina 1.
    stream: () => this.simpsonsService.getCharacters(1),
  });
}
