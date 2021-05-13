import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importamos
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';

// creamos las rutas -array de configuracion de las rutas

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: '**', component: LoginComponent },
];

// ahora exportamos el modulo del router

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
