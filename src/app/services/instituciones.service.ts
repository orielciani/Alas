import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {

  constructor(
    public http: HttpClient,
    public router: Router) { }

    cargar(desde: number = 0) {
      let url = SERVER_URL + 'instituciones?desde=' + desde;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'instituciones/institucion/' + id;
      return this.http.get(url);
    }
    agregar(concurrente: any) {
      let url = SERVER_URL + 'instituciones/agregar';
      return this.http.post(url, concurrente);
    }
    editar(id: string, concurrente: any) {
      let url = SERVER_URL + 'instituciones/actualizar';
      return this.http.put(url, concurrente);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'instituciones/eliminar/' + id;
      return this.http.delete(url);
    }
 }
