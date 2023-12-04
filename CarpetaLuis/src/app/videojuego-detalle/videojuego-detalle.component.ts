import { Block } from '@angular/compiler';
import { Component } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../entidades/user';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.css']
})
export class VideojuegoDetalleComponent{


  user : string
  //username : string

  listaVideojuegos : Videojuego[] = [];
  juego : Videojuego | null = null;

  //CREAMOS LA LISTA Y AÑADIMOS VIDEOJUEGOS
  constructor(private router:Router,route : ActivatedRoute){
    this.user = route.snapshot.params["user"]//RECOGEMOS EL NOMBRE DEL USUARIO
    let juego : Videojuego = new Videojuego(1,"GTA VI", "Rockstar Games","assets/img/gtaVI.jpg",10)
    this.listaVideojuegos.push(juego);
    juego = new Videojuego(2,"Minecraft", "Mojan","assets/img/minecraft.jpg",9)
    this.listaVideojuegos.push(juego)
    juego = new Videojuego(3,"Fortnite","Epic Games","assets/img/fortnite.jpg",2)
    this.listaVideojuegos.push(juego)
    juego = new Videojuego(4,"LOL","Riot Games","assets/img/lol.jpg",10)
    this.listaVideojuegos.push(juego)
    juego = new Videojuego(5,"CSGO","Valve","assets/img/csgo.jpg",4)
    this.listaVideojuegos.push(juego)
  }
  
  navegarADetalles(juego : Videojuego){
    //NAVEGAMOS A LOS DETALES DEL JUEGO 
    this.router.navigate(['/Detalles',juego.id,juego.titulo,juego.compania,juego.img,juego.valoracion]);
  }
} 