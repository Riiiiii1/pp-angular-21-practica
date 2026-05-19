import { Component ,inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

ActivatedRoute
@Component({
  selector: 'app-students-detail-page',
  imports: [RouterLink],
  templateUrl: './students-detail-page.html',
  styleUrl: './students-detail-page.css'
})
export class StudentsDetailPage {
  // Permite leer los parametros de la URL actual
  private route = inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');


}
