import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2'
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  admin = false;
  cargando = false;
 desde = 0;
 totalRegistros = 0;
 proveedores: any[] = [];
  titulo: string = 'Proveedores';
  data: string = 'proveedores'
  dataSingular: string = 'proveedor'
  buscar: string = 'Buscar ' + this.titulo;
  registros: string = 'Total de ' + this.data + ': ';
  botonCrear = 'Crear ' + this.dataSingular + ' nuevo'
  constructor(
    public proveedorservice: ProveedorService,
    public router: Router,
    public usuarioservice: UsuarioService
  ) { }
  ngOnInit(): void {
    this.cargarData();
    this.admin = this.usuarioservice.admin;
  }
    cargarData() {
      this.proveedorservice.cargarProveedores(this.desde).subscribe((respuesta: any) => {
        this.proveedores = respuesta.proveedores;
        this.totalRegistros = respuesta.proveedores.length;
        this.cargando = true;
      });
    }
  cambiarDesde( valor: number ){
    let desde = this.desde + valor;
    if (desde >= this.totalRegistros ) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargando = false;
    this.cargarData();
  }
   eliminar(proveedor: any) {
     const id: any = proveedor._id;
     Swal.fire({
       title: '¿Seguro que quieres eliminarlo?',
       text: "No podras revertir esta accion",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Eliminar'
     }).then((result) => {
       if (result.isConfirmed) {

         this.proveedorservice.eliminarProveedor(id).subscribe( (respuesat: any) => {
           this.cargarData();
          Swal.fire(
            'Elimnado',
            'El proveedor ' + proveedor.denominacion + ' fue eliminado',
            'success'
          )
         }, (error: any ) => {
          Swal.fire(
            'Error',
            'El proveedor ' + proveedor.denominacion + ' no pudo ser eliminado',
            'error'
          )
         });
       }
     })
   }
}
