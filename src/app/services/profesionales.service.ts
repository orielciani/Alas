import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(
    public http: HttpClient,
    public router: Router) { }

    cargar(desde: number = 0) {
      let url = SERVER_URL + 'profesionales?desde=' + desde;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'profesionales/profesional/' + id;
      return this.http.get(url);
    }
    agregar(concurrente: any) {
      let url = SERVER_URL + 'profesionales/agregar';
      return this.http.post(url, concurrente);
    }
    editar(id: string, concurrente: any) {
      let url = SERVER_URL + 'profesionales/actualizar';
      return this.http.put(url, concurrente);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'profesionales/eliminar/' + id;
      return this.http.delete(url);
    }
 }
