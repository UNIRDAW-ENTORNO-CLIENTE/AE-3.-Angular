import { Injectable } from '@angular/core';
import { MiVideojuego, Videojuego } from '../interfaces/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  listVideojuegos: Videojuego[] = [
    {id: "1", titulo: 'Counter Strike', compania: 'Valve', imagen: 'si', valoracionMedia: '8.5' },
    {id: "2", titulo: 'Call of Duty', compania: 'Activision', imagen: 'si', valoracionMedia: '8.5' },
    {id: "3", titulo: 'Valorant', compania: 'Riot', imagen: 'si', valoracionMedia: '8.5' },
    
    
  ];

  listMisJuegos: MiVideojuego[] = [
    {id: "1", titulo: 'Counter Strike', valoracionMedia: '8.5' },
  ];

  constructor() { }

  getVideojuego(){
    return this.listVideojuegos.slice();
  }

  getMiVideojuego(){
    return this.listMisJuegos.slice();
  }
  

  eliminarVideojuego(index: number){
    this.listVideojuegos.splice(index, 1);
  }

  eliminarMiVideojuego(index: number){
    this.listMisJuegos.splice(index, 1);
  }

  
}
