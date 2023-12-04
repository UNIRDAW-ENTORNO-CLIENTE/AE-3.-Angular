import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoDetalleComponent } from './videojuego-detalle/videojuego-detalle.component';
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './detalles/detalles.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    VideojuegoDetalleComponent,
    DetallesComponent,
    UserLoginComponent,
    BarraNavComponent,
    SobreNosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
