import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Videojuego } from 'src/app/interfaces/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listVideojuegos: Videojuego[]=[];

  displayedColumns: string[] = ['id', 'titulo','compania','imagen', 'valoracionMedia', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _videojuegoService: VideojuegoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  cargarVideojuegos(){
    this.listVideojuegos = this._videojuegoService.getVideojuego();
    this.dataSource = new MatTableDataSource(this.listVideojuegos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




}
