import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreUppercase: string = 'sAnTiAgO';
  nombreLowercase: string = 'sAnTiAgO';
  nombreTitlecase: string = 'sAnTiAgO';

  fecha: Date = new Date();
}
