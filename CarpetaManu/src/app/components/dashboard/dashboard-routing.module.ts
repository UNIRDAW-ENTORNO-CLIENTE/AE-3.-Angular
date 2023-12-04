import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent},
    { path: 'videojuegos', component: VideojuegosComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'nosotros', component: NosotrosComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
