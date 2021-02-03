import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2'
import { SERVER_URL } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { EfectoresService } from 'src/app/services/efectores.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public usuarioservice: UsuarioService,
    public efectoresservice: EfectoresService,
    public router: Router,
    public http: HttpClient
  ) { }
  ngOnInit(): void {
    this.cargarData();
  }
    cargando = true;
   desde = 0;
   totalRegistros = 0;
   efectores: any[] = [];
    cargarData() {
      this.efectoresservice.cargar(this.desde).subscribe((respuesta: any) => {
        console.log(respuesta);
        this.efectores = respuesta.efectoressalud;
        this.totalRegistros = respuesta.efectoressalud.length;
        this.cargando = false;
      });
    }
    buscar(termino: string) {
      if  ( termino === '' ) {
        this.cargarData();
        return;
      }
      let url = SERVER_URL + 'busqueda/db/agendacontactos/' + termino;
      return this.http.get(url).subscribe( (respuesta: any) => {
        this.efectores = respuesta.agendacontactos;
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
        this.efectoresservice.eliminar(id).subscribe( (respuesta: any) => {
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
