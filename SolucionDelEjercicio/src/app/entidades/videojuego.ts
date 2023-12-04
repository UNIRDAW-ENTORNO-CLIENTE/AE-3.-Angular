export class Videojuego{


    //ENTIDAD PARA LOS JUEGOS
    private _id : number;
    //private static cotadorId : number = 1;

    constructor(public id : number,public titulo : string, public compania : string, public img : string,public valoracion : number){
        this._id = id;
        this.titulo = titulo
        this.compania = compania
        this.img = img
        this.valoracion = valoracion
    }

    public get getid() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Titulo: ${this.titulo}, Compañia: ${this.compania}, Ruta img: ${this.img}, Valoracion media: ${this.valoracion}`
    }

    
}
