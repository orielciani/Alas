import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class EfectoresService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
token: string = this.usuarioservice.token;
    cargar(desde: number = 0) {
      let url = SERVER_URL + 'efectoressalud?desde=' + desde+ '&token=' + this.token;;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'efectoressalud/efectorsalud/' + id+ '?token=' + this.token;;
      return this.http.get(url);
    }
    agregar(efector: any) {
      let url = SERVER_URL + 'efectoressalud/agregar'+ '?token=' + this.token;;
      return this.http.post(url, efector);
    }
    editar(id: string, efector: any) {
      let url = SERVER_URL + 'efectoressalud/actualizar/' + id+ '?token=' + this.token;;
      return this.http.put(url, efector);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'efectoressalud/eliminar/' + id+ '?token=' + this.token;;
      return this.http.delete(url);
    }
 }
