import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
  token: string = this.usuarioservice.token;
    cargar(desde: number = 0) {
      let url = SERVER_URL + 'agendacontactos?desde=' + desde+ '&token=' + this.token;;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'agendacontactos/contacto/' + id+ '?token=' + this.token;;
      return this.http.get(url);
    }
    agregar(contacto: any) {
      let url = SERVER_URL + 'agendacontactos/agregar'+ '?token=' + this.token;;
      return this.http.post(url, contacto);
    }
    editar(id: string, contacto: any) {
      let url = SERVER_URL + 'agendacontactos/actualizar/' + id+ '?token=' + this.token;;
      return this.http.put(url, contacto);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'agendacontactos/eliminar/' + id+ '?token=' + this.token;;
      return this.http.delete(url);
    }
 }
