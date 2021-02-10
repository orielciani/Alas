import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ConcurrentesService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
  token: string = this.usuarioservice.token;
    cargar(desde: number = 0) {
      let url = SERVER_URL + 'concurrentes?desde=' + desde+ '&token=' + this.token;;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'concurrentes/concurrente/' + id+ '?token=' + this.token;;
      return this.http.get(url);
    }
    agregar(concurrente: any) {
      let url = SERVER_URL + 'concurrentes/agregar'+ '?token=' + this.token;;
      return this.http.post(url, concurrente);
    }
    editar(id: string, concurrente: any) {
      let url = SERVER_URL + 'concurrentes/actualizar/' + id+ '?token=' + this.token;;
      return this.http.put(url, concurrente);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'concurrentes/eliminar/' + id+ '?token=' + this.token;;
      return this.http.delete(url);
    }
 }
