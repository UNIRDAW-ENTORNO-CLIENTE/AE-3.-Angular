import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  id : string = ""
  titulo : string = ""
  compania : string = ""
  imagen : string = ""
  valoracion : string = ""

  constructor(route : ActivatedRoute){
//RECOGEMOS TODOS LOS PARAMETROS DE ENTRADA Y LOS SETEAMOS EN LA WEB PARA VISUALIZARLOS
    this.id = route.snapshot.params["id"]
    this.titulo = route.snapshot.params["titulo"]
    this.compania = route.snapshot.params["compania"]
    this.imagen = route.snapshot.params["imagen"]
    this.valoracion = route.snapshot.params["valoracion"]

  }

}
