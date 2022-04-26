import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  //Mayus Pipe personalizado
  enMayusculas: boolean = true;

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  //Ordenar pipe personalizado
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  ordenarPor: string = '';

  cambiarOrden(ordenarPor: string) {
    this.ordenarPor = ordenarPor;
  }
}
