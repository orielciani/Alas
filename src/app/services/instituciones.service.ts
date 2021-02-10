import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
token: string = this.usuarioservice.token;
    cargar(desde: number = 0) {
      let url = SERVER_URL + 'instituciones?desde=' + desde+ '&token=' + this.token;;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'instituciones/institucion/' + id+ '?token=' + this.token;;
      return this.http.get(url);
    }
    agregar(institucion: any) {
      let url = SERVER_URL + 'instituciones/agregar'+ '?token=' + this.token;;
      return this.http.post(url, institucion);
    }
    editar(id: string, institucion: any) {
      let url = SERVER_URL + 'instituciones/actualizar/' + id+ '?token=' + this.token;;
      return this.http.put(url, institucion);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'instituciones/eliminar/' + id+ '?token=' + this.token;;
      return this.http.delete(url);
    }
 }
