import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidades/user';
import { BarraNavComponent } from '../barra-nav/barra-nav.component';
import { Videojuego } from '../entidades/videojuego';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username = ""
  password = ""
  login = false

  listaUsuarios : Usuario[] = []
  listajuegos : Videojuego[] = []

  constructor(private router:Router){
    //ESTO ERA POR UN INTENTO DE IR PASANDO EL USUARIO POR TODOS LOS COMPONENTES Y RECOGIENDO SUS DATOS
    this.listajuegos.push(new Videojuego(1,"GTA VI", "Rockstar Games","assets/img/gtaVI.jpg",10))
    this.listajuegos.push(new Videojuego(2,"Minecraft", "Mojan","assets/img/minecraft.jpg",9))
    this.listajuegos.push(new Videojuego(3,"Fortnite","Epic Games","assets/img/Fortnite.jpg",2))
    this.listaUsuarios.push(new Usuario("Luis","abc",this.listajuegos))
    this.listaUsuarios.push(new Usuario("Manu","123",this.listajuegos))
    this.listaUsuarios.push(new Usuario("Pablo","abc123",this.listajuegos))
  }

  logearse(){
    this.login = false
    const user = new Usuario(this.username,this.password,this.listajuegos)//SI EL NOMBRE Y LA PASS SON IGUALES NAVEGAMOS A LA LISTA DE VIDEOJUEGOS 
    if(this.listaUsuarios.some(usuario => usuario.getUserName === this.username && usuario.getPassword === this.password)){
      this.router.navigate(['/VideojuegoDetalle',this.username]);
    }else{
      this.login = true
    }
  }
}
