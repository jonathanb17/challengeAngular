import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { routing, appRoutingProviders } from './app.routing';

// lo importamos para podes trabajar con formulario y databinding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnoComponent,
    ProfesorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing, // configuracion de rutas
    FormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
