import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVER_URL } from 'src/app/config/config';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  admin = false;
  usuarios: Usuario[] = [];
  concurrentes: any[] = [];
  contactos: any[] = [];
  proveedores: any[] = [];
  efectores: any[] = [];
  instituciones: any[] = [];
  obrasSociales: any[] = [];
  profesionales: any[] = [];
  constructor(public activatedroute: ActivatedRoute, public http: HttpClient, public usuarioservice: UsuarioService ) {
    this.activatedroute.params.subscribe ( params => {
      let termino = params['termino'];
      this.buscar(termino);
    })

  }

  ngOnInit(): void {
    this.admin = this.usuarioservice.admin;
  }

  buscar( termino: string ) {
    let url = SERVER_URL + 'busqueda/todo/' + termino;
    this.http.get(url).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.usuarios = respuesta.usuarios;
      this.concurrentes = respuesta.concurrentes;
      this.contactos = respuesta.contactos;
      this.efectores = respuesta.efectoresSalud;
      this.instituciones = respuesta.instituciones;
      this.obrasSociales = respuesta.obrassociales;
      this.profesionales = respuesta.profesionales;
      this.proveedores = respuesta.proveedores;
      this.profesionales = respuesta.profesionales;
    }, (error: any) => {
      console.log(error);
    });
  }
}
