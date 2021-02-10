import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
token: string = this.usuarioservice.token;
    cargar(desde: number = 0) {
      let url = SERVER_URL + 'profesionales?desde=' + desde+ '&token=' + this.token;;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'profesionales/profesional/' + id+ '?token=' + this.token;;
      return this.http.get(url);
    }
    agregar(profesional: any) {
      let url = SERVER_URL + 'profesionales/agregar'+ '?token=' + this.token;;
      return this.http.post(url, profesional);
    }
    editar(id: string, profesional: any) {
      let url = SERVER_URL + 'profesionales/actualizar/' + id+ '?token=' + this.token;;
      return this.http.put(url, profesional);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'profesionales/eliminar/' + id+ '?token=' + this.token;;
      return this.http.delete(url);
    }
 }
