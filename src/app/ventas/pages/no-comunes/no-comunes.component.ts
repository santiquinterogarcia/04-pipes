import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Santiago';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarNombre() {
    if (this.genero === 'masculino') {
      this.nombre = 'Nathalia';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Santiago';
      this.genero = 'masculino';
    }
  }

  //i18nPlural y Slice
  clientes: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  clientesMap = {
    '=0': 'no tenemos clientes',
    '=1': 'tenemos 1 clientes',
    other: 'tenemos # clientes ',
  };

  eliminarPersona() {
    this.clientes.pop();
  }

  agregarPersonas() {
    this.clientes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  }

  //Keyvalue
  persona = {
    nombre: 'Santiago',
    edad: 23,
    direccion: 'Medellín',
  };

  //Json
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async
  miObservable = interval(1000); //0,1,2,3,4,5...
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 2000);
  });
}
