import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { VideojuegoDetalleComponent } from './videojuego-detalle/videojuego-detalle.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
const routes: Routes = [
  {path : '', component : UserLoginComponent},//En este caso decimos el componente que mostraremos por defecto
  {path : 'VideojuegoDetalle', component : VideojuegoDetalleComponent},//PATH PARA IR AL HOME CON LA LISTA DE VIDEOJUEGOS
  {path : 'VideojuegoDetalle/:user', component : VideojuegoDetalleComponent},
  {path : 'Detalles/:id/:titulo/:compania/:imagen/:valoracion', component : DetallesComponent},//PATH PARA IR A LOS DETALLES DEL VIDEOJUEGO
  {path : 'Contacto', component : ContactoComponent},
  {path : 'sobreNosotros', component : SobreNosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

