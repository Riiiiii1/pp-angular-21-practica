import {
  UpperCasePipe,
  LowerCasePipe,
  DatePipe,
  CurrencyPipe,
  PercentPipe
} from '@angular/common';
import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-footer',
  imports: [
        UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  title = signal('Footer Angular');

  message = signal('David Esteban Sisa Buestan');

  today = signal(new Date());

  price = signal(150);

  percent = signal(0.75);

}
