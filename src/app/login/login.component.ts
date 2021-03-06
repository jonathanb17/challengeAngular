import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public nombre: string = '';
  public password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirigirAlumno() {
    if (this.nombre == 'alumno') {
      this.router.navigate(['/alumno']);
    } else {
      if (this.nombre == 'profesor') {
        this.router.navigate(['/profesor']);
      }
    }
  }
}
