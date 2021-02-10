import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ObrasSocialesService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
token: string = this.usuarioservice.token;
    cargar(desde: number = 0) {
      let url = SERVER_URL + 'obrassociales?desde=' + desde+ '&token=' + this.token;;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'obrassociales/obrasocial/' + id+ '?token=' + this.token;;
      return this.http.get(url);
    }
    agregar(obraSocial: any) {
      let url = SERVER_URL + 'obrassociales/agregar'+ '?token=' + this.token;;
      return this.http.post(url, obraSocial);
    }
    editar(id: string, obraSocial: any) {
      let url = SERVER_URL + 'obrassociales/actualizar/' + id+ '?token=' + this.token;;
      return this.http.put(url, obraSocial);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'obrassociales/eliminar/' + id+ '?token=' + this.token;;
      return this.http.delete(url);
    }
 }

