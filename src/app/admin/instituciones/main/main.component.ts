import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2'
import { SERVER_URL } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public usuarioservice: UsuarioService,
    public institucionesservice: InstitucionesService,
    public router: Router,
    public http: HttpClient
  ) { }
  ngOnInit(): void {
    this.cargarData();
    this.admin = this.usuarioservice.admin;
  }
  admin = false;
    cargando = true;
   desde = 0;
   totalRegistros = 0;
   instituciones: any[] = [];
    cargarData() {
      this.institucionesservice.cargar(this.desde).subscribe((respuesta: any) => {
        this.instituciones = respuesta.instituciones;
        this.totalRegistros = respuesta.conteo;
        this.cargando = false;
      });
    }
    buscar(termino: string) {
      if  ( termino === '' ) {
        this.cargarData();
        return;
      }
      let url = SERVER_URL + 'busqueda/db/instituciones/' + termino;
      return this.http.get(url).subscribe( (respuesta: any) => {
        this.instituciones = respuesta.instituciones;
      }, (error: any) => {
        Swal.fire(
          'Error',
          'Error inesperado',
          'error'
        )
      } )
      ;
    }
  cambiarDesde( valor: number ){
    let desde = this.desde + valor;
    console.log(desde);
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
  eliminar(contacto: any) {
    const id: any = contacto._id;
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
        this.institucionesservice.eliminar(id).subscribe( (respuesta: any) => {
          Swal.fire(
            'Elimnado',
            'El concurrente ' + contacto.nombre + ' fue eliminado',
            'success'
          );
          let entero =  ((this.totalRegistros - 1) / 5);
          if ( Number.isInteger(entero) === true ) {
            this.cambiarDesde(-5);
          } else {
            this.cargarData();
          }
        }, (error: any ) => {
          if ( error.error.mensaje === 'No puedes eliminarte a si mismo' ) {
            Swal.fire(
              'Error',
              'No puedes eliminar tu propia cuenta',
              'error'
            )
            return;
          }
        });
      }
    })
  }
}
