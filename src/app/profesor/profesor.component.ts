import { Component, OnInit } from '@angular/core';

// importo el modelo
import { Alumnos } from './../models/alumnos';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
})
export class ProfesorComponent implements OnInit {
  public arrayDatosAlum: Array<Alumnos>;

  constructor() {
    this.arrayDatosAlum = [
      new Alumnos('Manuel fernandez', 'Matematica', 'mañana', 'lunes'),
      new Alumnos('Manuel fernandez', 'geografia', 'tarde', 'martes'),
      new Alumnos('Manuel fernandez', 'historia', 'mañana', 'miercoles'),
      new Alumnos(
        'Manuel fernandez',
        'analisis matematico 1',
        'tarde',
        'jueves'
      ),
      new Alumnos('Manuel fernandez', 'algebra', 'mañana', 'viernes'),
    ];
  }

  ngOnInit(): void {}
}
