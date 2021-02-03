import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2'
import { SERVER_URL } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public usuarioservice: UsuarioService,
    public router: Router,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
    cargando = false;
   desde = 0;
   totalRegistros = 0;
   usuarios: Usuario[] = [];
    cargarUsuarios() {
      this.usuarioservice.cargarUsuarios(this.desde).subscribe((respuesta: any) => {
        this.usuarios = respuesta.usuarios;
        this.totalRegistros = respuesta.conteo;
        this.cargando = true;
      });
    }
    buscar(termino: string) {
      if  ( termino === '' ) {
        this.cargarUsuarios();
        return;
      }
      let url = SERVER_URL + 'busqueda/db/usuarios/' + termino;
      return this.http.get(url).subscribe( (respuesta: any) => {
        this.usuarios = respuesta.usuarios;
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
    this.cargarUsuarios();
  }
  verMas(usuario: Usuario) {
    this.router.navigate(["/admin/usuarios/ver/" + usuario._id]);
  }
  editar(usuario: Usuario) {
    this.router.navigate(["/admin/usuarios/editar/" + usuario._id]);
  }
  eliminar(usuario: Usuario) {
    const id: any = usuario._id;
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
        this.usuarioservice.eliminarUsuario(id).subscribe( (respuesta: any) => {
          Swal.fire(
            'Elimnado',
            'El usuario ' + usuario.email + ' fue eliminado',
            'success'
          );
          let entero =  ((this.totalRegistros - 1) / 5);
          if ( Number.isInteger(entero) === true ) {
            this.cambiarDesde(-5);
          } else {
            this.cargarUsuarios();
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
