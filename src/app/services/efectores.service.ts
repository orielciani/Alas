import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class EfectoresService {

  constructor(
    public http: HttpClient,
    public router: Router) { }

    cargar(desde: number = 0) {
      let url = SERVER_URL + 'efectoressalud?desde=' + desde;
      return this.http.get(url);
    }
    cargarUno(id: string) {
      let url = SERVER_URL + 'efectoressalud/efectorsalud/' + id;
      return this.http.get(url);
    }
    agregar(concurrente: any) {
      let url = SERVER_URL + 'efectoressalud/agregar';
      return this.http.post(url, concurrente);
    }
    editar(id: string, concurrente: any) {
      let url = SERVER_URL + 'efectoressalud/actualizar';
      return this.http.put(url, concurrente);
    }
    eliminar(id: string) {
      let url = SERVER_URL + 'efectoressalud/eliminar/' + id;
      return this.http.delete(url);
    }
 }
