import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MiVideojuego } from 'src/app/interfaces/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-mis-juegos',
  templateUrl: './mis-juegos.component.html',
  styleUrls: ['./mis-juegos.component.css']
})
export class MisJuegosComponent implements OnInit {
  listMisJuegos: MiVideojuego[]=[];

  displayedColumns: string[] = ['id', 'titulo', 'valoracionMedia', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _videojuegoService: VideojuegoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  cargarVideojuegos(){
    this.listMisJuegos = this._videojuegoService.getMiVideojuego();
    this.dataSource = new MatTableDataSource(this.listMisJuegos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarMiVideojuego(index: number){
    console.log(index);

    this._videojuegoService.eliminarMiVideojuego(index);
    this.cargarVideojuegos();
    
    //mensaje cuando se elimina un usuario
    this._snackBar.open('El videojuego se ha eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })

  }

  

}
