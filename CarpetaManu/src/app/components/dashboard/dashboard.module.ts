import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MisJuegosComponent } from './mis-juegos/mis-juegos.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    MisJuegosComponent,
    VideojuegosComponent,
    ContactoComponent,
    NosotrosComponent,
    DetalleVideojuegoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
