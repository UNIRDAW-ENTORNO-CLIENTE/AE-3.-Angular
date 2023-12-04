import { Videojuego } from "./videojuego"


//ENTIDAD USUARIO DONDE SE VAN A GUARDAR LOS JUEGOSSS
export class Usuario{


    public username : string
    private password : string
    private juegos : Videojuego[] = []

    constructor(username : string,password : string, juegos : Videojuego[]){
        this.username = username
        this.password = password
    }

    public get getUserName() : string{
        return this.username;
    }
    public get getPassword() : string{
        return this.password;
    }
    public get getGames() : Videojuego[]{
        return this.juegos;
    }
}


