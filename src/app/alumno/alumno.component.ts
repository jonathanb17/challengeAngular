import { Component, OnInit } from '@angular/core';
import { Usuarios } from './../models/usuario';

Usuarios;

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  public formu: Usuarios; // hago databinding
  public arrayForm: Array<Usuarios>; // le agrego cosas al array

  public diasSemanas;
  public turnosSemana;

  constructor() {
    this.formu = new Usuarios('', '', '', '');

    this.arrayForm = [
      new Usuarios('Cattarino Gabriel', 'matematica', 'mañana', 'lunes'),
    ];

    this.diasSemanas = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

    this.turnosSemana = ['mañana', 'tarde'];
  }

  ngOnInit(): void {}

  agregarDatos(dia) {
    this.arrayForm.push(this.formu); //lo que tengas en el formulario escribiendo agregalo al arry
    this.formu = new Usuarios('', '', '', '');

    // this.arrayForm.forEach((it) => {
    //   if (this.arrayForm[it.dia] == dia) {
    //     alert('ingrese un valor correcto!,esta repetido');
    //   } else {
    //     this.arrayForm.push(this.formu); //lo que tengas en el formulario escribiendo agregalo al arry
    //     this.formu = new Usuarios('', '', '', '');
    //   }
    // });
  }

  agregarDia() {
    this.diasSemanas = this.formu;
  }

  agregarTurno() {
    this.turnosSemana = this.formu;
  }
}
